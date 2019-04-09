if (location.hostname == 'joshuarudd.com') { // No need to run these on local development.
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-1722632-1');
} else {
  console.warn('Analytics not loaded (on purpose).');
}
