import React from 'react';
import './staf.css'

export default function contacte()
{
 return (
  <>
<section class=" container  mb-4">

    
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
  
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row bq-danger ">

     
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" method="POST">

           
                <div class="row">

                  
                    <div class="col-md-6 ">
                        <div class="md-form mb-0">
                        <label for="name" class="">Your name</label>
                            <input type="text" id="name"  placeholder="Ton nom" name="name" class="form-control"/>
                            
                        </div>
                    </div>
                    

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="email" class="">Your email</label>
                            <input type="text" id="email" placeholder="email" name="email" class="form-control"/>
                            
                        </div>
                    </div>
                   

                </div>
               

               
                <div class="row">
                    <div class="col-md-6 ">
                        <div class="md-form mb-0">
                        <label for="subject" class="">Subject</label>
                            <input type="text" id="subject"  placeholder="sujet " name="subject" class="form-control"/>
                            
                        </div>
                    </div>
                </div>
             

               
                <div class="row">

                    
                    <div class="col-md-6 ">

                        <div class="md-form">
                        <label for="message">Your message</label>
                            <textarea type="text" id="message" placeholder="message" name="message" rows="2" class="form-control"></textarea>
                          
                        </div>

                    </div>
                </div>
               

            </form>

            <div class="text-center text-md-left">
                <button class="btn btn-primary" onclick="submit()">Send</button>
            </div>
            <div class="status"></div>
        </div>
      

        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@mdbootstrap.com</p>
                </li>
            </ul>
        </div>
       

    </div>

</section>
</>
)
}
