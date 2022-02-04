# Welcome to USC Connect's REST API

Hello, here in this Readme file we will explain how to use this [Node.js](https://nodejs.org/en/) Server.

[API URL](https://usc-connect-api.herokuapp.com/) For making requests.

## Step 1

### Installation

In Node.js we developed scripts in the [package.json](https://www.tabnine.com/blog/node-modules-package-json/?utm_term=&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=4311736126&hsa_cam=14854202152&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAiA55mPBhBOEiwANmzoQuwqSbOaUsDOpBj_hSIvb4tkNYGvlJ4w1QYruFkv2MpzXohd1ldXdRoC0zkQAvD_BwE) file to help run and test our code.
To get started using the terminal within [VS Code](https://code.visualstudio.com/) you can run the script below.

```bash
npm install
```

The script above will download all the current libraries (modules) that are used in our project. Without this the project won't run. You should expect to see a node_modules folder pop up. We never commit this in our repository. The reason being that it takes up a lot of space, and can be easily restored with the command shown above.

## Step 2

### Adding a MongoDB database

We need to connect to a mongoDB database to utilize the API's resources.

```javascript
const DB_URI = config.db.URI;
const DB_USER = config.db.USER || null;
const DB_PASSWORD = config.db.PASSWORD || null;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      user: DB_USER,
      pass: DB_PASSWORD,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    logger.error({
      //     message: `${err.message}`,
      timestamp: `${new Date().toString()}`,
    });
  }
};
```

The code above is what is used to connect to MongoDB using Mongoose.

```.env
DB_USER = USER_FOR_YOUR_DATABASE
DB_PASSWORD = PASSWORD_FOR_YOUR_DATABASE
DB_NAME = NAME_FOR_YOUR_DATABASE
```

OR if your database uses a URL

```.env
DB_URI = URL_FOR_YOUR_DATABASE
```

## Step 3

### Let's Run Our Application

Once all .env variables are filled and you have installed all node modules, you can run the command below in your terminal. This will start up our server in a development environment.

```bash
npm run dev
```

## Step 4

### Code Away!

Using [Postman](https://www.postman.com/), you can start to test and code. For further information message me, Karl-Johan Bailey, on whatsapp or our discord server.
