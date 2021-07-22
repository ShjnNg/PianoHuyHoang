import emailjs from 'emailjs-com';

export default function sendEmail(dataa) {
    emailjs.send('service_xr5gjjb', 'template_xhd3xy5', dataa, 'user_djIpFuQRz8xT7GITyze2a')
      .then((result) => {
        console.log(result.status, result.text);
          /* window.location.reload()  */ //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }