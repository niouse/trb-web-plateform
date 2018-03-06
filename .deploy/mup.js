module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: '51.15.142.16',
      username: 'root',
      // pem: '/home/spinard/.ssh/trb-ssh.pub'
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },

  app: {
    // TODO: change app name and path
    name: 'trb-plateforme',
    path: '/home/spinard/Documents/git/trb-plateform-V7',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'https://www.trb-engineering.com/',
      MONGO_URL: 'mongodb://localhost/data',
    },

    /*ssl: { // (optional)
       //Enables let's encrypt (optional)
      autogenerate: {
        email: 'site.trb@gmail.com',
         // comma separated list of domains
        domains: 'trb-engineering.com,www.trb-engineering.com'
       }
	
    },*/
    ssl: {
	    crt: './bundle.crt', // this is a bundle of certificates
	    key: './private.key', // this is the private key of the certificate
	    port: 443 // 443 is the default value and it's the standard HTTPS port
	  },
	
    docker: {
      // change to 'abernix/meteord:base' if your app is using Meteor 1.4 - 1.5
      image: 'abernix/meteord:base',
    },

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    version: '3.4.3',
    servers: {
      one: {}
    }
  },

};
