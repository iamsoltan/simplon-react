import React from 'react';
import './staf.css'





export default function contacte()
{
 return (
  <>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<div class=" container  mb-4">

    
    <h2 class="h1-responsive font-weight-bold text-center my-4" style ={{color:"#ce0033"}}>Contact us</h2>
  
    <p class="text-center w-responsive mx-auto mb-5">Avez-vous des questions? N'hésitez pas à nous contacter directement. Notre équipe reviendra vers vous 


       .</p>

    <div class="row bq-danger ">

     
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" method="POST">

           
                <div class="row">

                  
                    <div class="col-md-6 ">
                        <div class="md-form mb-0">
                        <label for="name" className="text-white">Ton Nom</label>
                            <input type="text" id="name"  placeholder="Ton nom" name="name" className=" input form-control"/>
                            
                        </div>
                    </div>
                    

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="email" className="text-white">Ton email</label>
                            <input type="text" id="email" placeholder="email" name="email" className=" input form-control"/>
                            
                        </div>
                    </div>
                   

                </div>
               

               
                <div class="row">
                    <div class="col-md-6 ">
                        <div class="md-form mb-0">
                        <label for="subject" className="text-white">Sujet</label>
                            <input type="text" id="subject"  placeholder="sujet " name="subject" className=" input form-control"/>
                            
                        </div>
                    </div>
                </div>
             

               
                <div class="row">

                    
                    <div class="col-md-6 ">

                        <div class="md-form">
                        <label for="message" className="text-white"> message</label>
                            <textarea type="text" id="message" placeholder="message" name="message" rows="2" className ="input form-control"></textarea>
                          
                        </div>

                    </div>
                </div>
               

            </form>

            <div class="text-center text-md-left">
                <button class="btn btn-primary" onclick="submit()">Envoi message</button>
            </div>
            <div class="status"></div>
        </div>
      

        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i i class="fa fa-map"></i>
                    <p>rue barcalone , tunisie</p>
                </li>

                <li><i class="fa fa-phone mt-4 fa-2x"></i>
                    <p>+ 2162500000000</p>
                </li>

                <li><i class="fa fa-envelope mt-4 fa-2x"></i>
                    <p>simplon tunisie @gmail.com</p>
                </li>
            </ul>
        </div>
       

    </div>

</div>
</>
)
}
