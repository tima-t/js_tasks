// const dns = require('dns');

// dns.lookup('nodejs.org', (err, addresses, family) => {
//     console.log('addresses:', addresses);
//     console.log('family:', family);
// });

// const dns = require('dns');

// dns.resolve4('google.com', (err, addresses) => {
//     if (err) throw err;

//     console.log(`addresses: ${JSON.stringify(addresses)}`);

//     addresses.forEach((a) => {
//         dns.reverse(a, (err, hostnames) => {
//             if (err) {
//                 throw err;
//             }
//             console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
//         });
//     });
// });

const dns = require('dns');
dns.lookupService('127.0.0.1', 13, (err, hostname, service) => {
    console.log(hostname, service);
    // Prints: localhost ssh
});