const { defineConfig } = require('cypress')

module.exports = defineConfig({
  clientCertificates: [
    {
      url: 'https://a.host.com',
      ca: ['certs/ca.pem'],
      certs: [
        {
          cert: 'certs/cert.pem',
          key: 'certs/private.key',
          passphrase: 'certs/pem-passphrase.txt',
        },
      ],
    },
    {
      url: 'https://b.host.com/a_base_route/**',
      ca: [],
      certs: [
        {
          pfx: '/home/tester/certs/cert.pfx',
          passphrase: '/home/tester/certs/pfx-passphrase.txt',
        },
      ],
    },
    {
      url: 'https://a.host.*.com/',
      ca: [],
      certs: [
        {
          pfx: 'certs/cert.pfx',
          passphrase: 'certs/pfx-passphrase.txt',
        },
      ],
    },
  ],
})