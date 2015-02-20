'use strict';

exports.port = process.env.PORT || 3000;
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/agrippa'
};
exports.companyName = 'Agrippa';
exports.projectName = 'Agrippa';
exports.systemEmail = 'oliver@agrippa.io';
exports.cryptoKey = 'testtest';
exports.loginAttempts = {
  forIp: 15,
  forIpAndUser: 5,
  logExpiration: '20m'
};
exports.requireAccountVerification = true;
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName,
    address: process.env.SMTP_FROM_ADDRESS || 'oliver@agrippa.io'
  },
  credentials: {
    user: process.env.SMTP_USERNAME || 'oliver@agrippa.io',
    password: process.env.SMTP_PASSWORD || 'Imatfaalws2',
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    ssl: true
  }
};
exports.oauth = {
  twitter: {
    key: process.env.TWITTER_OAUTH_KEY || '',
    secret: process.env.TWITTER_OAUTH_SECRET || ''
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '',
    secret: process.env.FACEBOOK_OAUTH_SECRET || ''
  },
  github: {
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  },
  google: {
    key: process.env.GOOGLE_OAUTH_KEY || '',
    secret: process.env.GOOGLE_OAUTH_SECRET || ''
  },
  tumblr: {
    key: process.env.TUMBLR_OAUTH_KEY || '',
    secret: process.env.TUMBLR_OAUTH_SECRET || ''
  }
};
