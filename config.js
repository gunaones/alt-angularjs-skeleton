alt.application = 'prototyper';
alt.version = '1.0.0';
alt.environment = 'development';
alt.urlArgs = alt.environment == 'production' ? '_v=' + alt.version : '_t=' + (+new Date());
alt.serverUrl = '';