const cloudinary = require("cloudinary").v2;
export default async function handler(req, res) {
  const formData = req.body;
  // Configuration
  cloudinary.config({
    cloud_name: "dhuc2snzh",
    api_key: "798392986574494",
    api_secret: "IPK6177RmWZNmAd9G5p6KNjaztc",
  });

  // Upload

  const result = cloudinary.uploader.upload(formData, {
    public_id: "olympic_flag",
  });
  result
    .then((data) => {
      res.status(200).send(result);
      console.log(data);
      console.log(data.secure_url);
    })
    .catch((err) => {
      res.status(200).send(result);
      console.log(err);
    });

  //   // Generate
  //   const url = cloudinary.url("olympic_flag", {
  //     width: 100,
  //     height: 150,
  //     Crop: 'fill'
  //   });

  // The output url
  console.log(url);
  // https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag
}
