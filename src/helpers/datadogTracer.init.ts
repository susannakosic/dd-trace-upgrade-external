import tracer from 'dd-trace';

// dd-trace must be initialised before any other modules is imported
// https://github.com/DataDog/dd-trace-js/issues/2223#issuecomment-1198273549
// https://github.com/DataDog/dd-trace-js/issues/1333#issuecomment-827243938

tracer.init({
  plugins: true,
  logInjection: true,
  runtimeMetrics: true,
  //startupLogs: true,
});

tracer.use('express', {
  hooks: {
    request: (span, req: any) => {
      console.log(`express hook running`);
      if (req.traceContext) {
        span.addTags({
          context: {action: 'documents:list', "requester.authId": 'auth0|0000000000000'},
        });
      }
      // Lines 24-27 below can fix APM span route label.
      // When disabled express request span shows GET /documents/documents/documents instead of GET /documents
      const httpRoute = req?.baseUrl + req?.route?.path;
      span.setTag('http.route', httpRoute);
    },        
  },
  service: `op-api-${process.env.STAGE}-app`,
});
console.log(`tracer initialised: ${tracer['_initialized']}`);


export default tracer;
