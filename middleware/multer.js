// import multer from "multer";

// const storage=multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,"./public/temp")
//     },
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     }
// });

// export const upload=multer({
//     storage,
// })

// appointment_backend/config/multer.js


import multer from 'multer';

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image/')) {
    return cb(new Error('Only image files allowed'), false);
  }
  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5 MB
  }
});

export default upload;
