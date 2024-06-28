// const args = process.argv;

// console.log(args); 

// const name = args[2];

// console.log("Hello,", name);
// end 1

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
//  });
//  readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`);
//     readline.close();
//  });
//  end 2


// var fs = require("fs");
// var data = fs.readFileSync('input.txt');

// fs.readFile('input.txt',  (err, data) => {
//    if (err) return console.error(err);
//    console.log(data.toString());
// });
// let i = 1;
// const readline = require('readline');

// readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//  });
// while (i < 111 ) {
//   console.log("The number is " + i);


//  readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`);
//     readline.close();
//  });

//   i++;

// }
//  end 3

// var http = require('http');
// var formidable = require('formidable');

// var errors = formidable.formidableErrors;

// const server = http.createServer(async (req, res) => {
//    if (req.url === '/api/upload' && req.method.toLowerCase() === 'post') {
//       // parse a file upload
//       const form = new formidable.IncomingForm();
//       let fields;
//       let files;
//       try {
//          [fields, files] = await form.parse(req);
//       } catch (err) {

//          res.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
//          res.end(String(err));
//          return;
//       }
//       console.log(req);
//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ fields, files }, null, 2));
//       return;
//    }

//    // show a file upload form
//    res.writeHead(200, { 'Content-Type': 'text/html' });
//    res.end(`
//       <h2>With Node.js <code>"http"</code> module</h2>
//       <form action="/api/upload" enctype="multipart/form-data" method="post">
//       <div>Text field title: <input type="text" name="title" /></div>
//       <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
//       <input type="submit" value="Upload" />
//       </form>
//    `);
// });
// server.listen(5000, () => {
//    console.log('Server listening on http://localhost:5000/ ...');
// });
// end 4

// const express = require('express');
// const formidable = require('formidable');
// const multer = require('multer');
 

// var storage = multer.diskStorage({   
//     destination: function(req, file, cb) { 
//        // destination is used to specify the path of the directory in which the files have to be stored
//        console.log(file);
//        cb(null, './uploads');    
//     }, 
//     filename: function (req, file, cb) { 
//        // It is the filename that is given to the saved file.
//        console.log(file);
//        cb(null ,Date()+ file.originalname);   
//     }
//  });
 
//  // Configure storage engine instead of dest object.
//  const upload = multer({ storage: storage })


// // const upload = multer();
// const app = express();


// app.get('/', (req, res) => {
//    res.send(`
//       <h2>With <code>"express"</code> npm package</h2>
//       <form action="/api/upload" enctype="multipart/form-data" method="post">
//       <div>Text field title: <input type="text" name="title" /></div>
//       <div>File: <input type="file" name="someExpressFiles" multiple="multiple" /> <input type="file" name="someExpressFiles2" multiple="multiple" /></div>
//       <input type="submit" value="Upload" />
//       </form>
//    `);
// });
// // app.post('/api/upload', (req, res, next) => {

// //     const form = new formidable.IncomingForm();

// //    form.parse(req, (err, fields, files) => {
// //       if (err) {
// //          next(err);
// //          return;
// //       }
// //       res.json({ fields, files });
// //    });
// // });
// app.post('/api/upload', upload.single("someExpressFiles"), (req, res) => {
//     console.log("Body: ", req.body);
//     console.log("File: ", req.file);



//     res.send("File successfully uploaded.");
//  });


// app.listen(5000, () => {
//    console.log('Server listening on http://localhost:5000 ...');
// });

// end 5
const fs = require('fs');

const out = fs.createWriteStream('./stdout.log');

const err = fs.createWriteStream('./stderr.log');

const logger = new console.Console(out, err);
  

// const abortfunction = () => { 
//     logger.log('Start...'); 
   
//     // It prints the message after every 1 second 
//     setInterval((function() { 
//        return logger.log('Hello World..'); 
//     }), 1000); 
   
//     // It calls process.abort() after 5 seconds 
//     setTimeout((function() { 
//          logger.log('aborted'); 

//        return process.abort(); 
//     }), 2000); 
//  }; 


// process.on('exit', function(code) {
//     // Following code will never execute.
//     setTimeout(function() {
//         logger.log("This will not run");
//     }, 0);
    
//     logger.log('About to exit with code:', code);
//  });

   
//  abortfunction();
 
//  logger.log("Program Ended");


logger.error(new Error('Oops... something went wrong'));
// logger.error(  'Oops... something went wrong');

// // print warning

// const name = 'NodeJS Tutorial';

// logger.warn(`Warning ${name}! Warning!`);