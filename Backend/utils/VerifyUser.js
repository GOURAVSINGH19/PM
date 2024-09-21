const nodemailer = require("nodemailer");

const PASSWORD_RESET_REQUEST_TEMPLATE = require("../multitrap/EmailTemplate");

const VerifyUser = async (email, text, data, token) => {
  const transpoter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    secure: true,
    port: 465,
    html: PASSWORD_RESET_REQUEST_TEMPLATE,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const handleverify = () => {
    verify = true;
  };

  const handleverifycancle = () => {
    verify = false;
  };

  const mailoptions = {
    from: {
      name: "BPIT-COLLAGE",
      address: process.env.EMAIL,
    },
    to: email,
    html: `
     <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="max-w-md w-full space-y-6 p-6 rounded-lg shadow-lg bg-card">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Verify Your Identity</h1>
          <p className="text-muted-foreground">Enter your details to verify your identity.</p>
        </div>
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            ${data.username}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="projectUrl">projectUrl</Label>
            ${data.projectUrl}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="project-title">Project Title</Label>
            ${data.researchtitle}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="faculty-name">Faculty Name</Label>
            ${data.facultyname}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="department">Department</Label>
            ${data.department}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone-number">Phone Number</Label>
            ${data.phone}
          </div>
          <div className="flex gap-2 justify-between">
          <Button onClick =
            handleverify type="button" variant="outline" className="flex-1 px-4 py-3 w-20 bg-blue-400">
              Verify
           </Button>
          <Button onClick =
            handleverifycancle type="button" variant="outline" className="flex-1 px-4 py-3 w-20 bg-blue-400">
              Cancle
           </Button>
          </div>
        </div>
      </div>
    </div>
  `,
    subject: text,
    text: text,
  };

  await transpoter.sendMail(mailoptions, (err) => {
    if (err) console.log(err);
    else console.log("Email sent successfully");
  });
};

module.exports = VerifyUser;
