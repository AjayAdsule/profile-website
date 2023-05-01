import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
        <footer className='my-[30px]'>
            <div className="container flex justify-center">
            <div className="copyright my-[10px]">
            &copy;ajay adsule
            </div>
           
            <a href="https://www.facebook.com/ajayadsule1561"target="_blank">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdfCt2fREIBBEKMV8PIEp0QEInkGSgMlW7qO5kr-w&s" alt="facebook" className='w-[30px] my-[10px] mx-[10px]' />    
            </a>
            <a href="https://www.linkedin.com/in/ajay-adsule-b57104138"target="_blank">
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="linkden" className='w-[50px]'/>      
            </a>
          
            </div>
        </footer>
    </React.Fragment>
  )
}

export default Footer
