import _ from 'lodash';
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://fd43e9b1c02c9ea1a4663e632048ca19@o4506242183987200.ingest.sentry.io/4506344378728448",

  //environment
  environment: "staging",

  // Alternatively, use `process.env.npm_package_version` for a dynamic release version
  // if your build tool supports it.
  release: "rj-onboarding@0.0.1",
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

setTimeout(() => {
  throw new Error("Sentry Test Error");
});

document.body.appendChild(component());
