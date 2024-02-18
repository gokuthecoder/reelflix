import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        const Date = new Date.now
        cb(null, file.originalname + new Date().getTime())
    }
})

export const upload = multer({
    storage,
})