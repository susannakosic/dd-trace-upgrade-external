import tracer from 'dd-trace';
import formats from 'dd-trace/ext/formats';
import pino from 'pino';

const logger = pino({
  level: /^dev/.test(process.env.NODE_ENV) ? 'debug' : 'info',
  formatters: {
    level(level) {
      return { level };
    },
  },
  mixin() {
    // Below works on dd-trace@2.6.x
    const datadogTraceContext = {};
    const span = tracer.scope().active();
    if (span) {
      tracer.inject(span.context(), formats.LOG, datadogTraceContext);
      console.log(`active span injected into logger`);
    } else {
      console.log(`no active span`);
    }
    // https://docs.datadoghq.com/tracing/other_telemetry/connect_logs_and_traces/nodejs/#manual-injection
    return datadogTraceContext;
  },
});

export default logger;
