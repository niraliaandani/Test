
    import React from 'react';

    
    import {Text,Input,Img,Line} from 'components'
  import {useNavigate} from 'react-router-dom'
  
    

    

    const Footer = (props) => {
      const navigate = useNavigate();
  
      function handleNavigate4() {window.location.href = "https://www.facebook.com/login/"}
  
      
      return (<>
        <footer
    className={props.className}
    
    
  ><div
  className="flex items-center justify-center mb-[73px] mt-[69px] mx-[auto] w-[73%]"
  

  
  ><div
  className="flex flex-col items-center justify-center w-[100%]"
  

  
  ><div
  className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]"
  
  
  ><div
  className="flex md:flex-1 flex-col gap-[18px] items-start justify-start md:w-[100%] w-[auto]"
  

  
  ><Text
    className="common-pointer font-yesevaone not-italic text-blue_100 text-left uppercase w-[auto]"
     as="h2" variant="h2"onClick={() => navigate('/')}

    
  ><span  className="md:text-[34px] sm:text-[32px] text-blue_100 text-[36px] font-normal" >Med</span><span  className="md:text-[34px] sm:text-[32px] text-blue_100 text-[36px] font-normal" >dical</span></Text><Text
    className="font-normal font-worksans leading-[140.00%] not-italic text-left text-white_A700 w-[100%]"
     variant="body1"

    
  >Leading the Way in Medical<br />Execellence, Trusted Care.</Text></div><div
  className="flex md:flex-1 flex-col gap-[39px] items-start justify-start md:mt-[0] mt-[2px] md:w-[100%] w-[15%]"
  

  
  ><Text
    className="font-semibold font-worksans text-left text-white_A700 w-[auto]"
     variant="body1"

    
  >Important Links</Text><ul
  className="flex flex-col items-start justify-start md:w-[100%] w-[103px] common-column-list"
  

  
  ><li className="w-[auto]"><Text
    className="common-pointer cursor-pointer font-normal font-worksans not-italic text-left text-white_A700"
     variant="body2"onClick={() => navigate('/appointment')}

    
  >Appointment</Text></li><li className="mt-[8px] w-[auto]"><a
className="common-pointer cursor-pointer font-normal font-worksans not-italic text-[16px] text-left text-white_A700"
onClick={() => navigate('/doctors')}

>
Doctors
</a></li><li className="mt-[9px] w-[auto]"><a
className="common-pointer cursor-pointer font-normal font-worksans not-italic text-[16px] text-left text-white_A700"
onClick={() => navigate('/services')}

>
Services
</a></li><li className="mt-[9px] w-[auto]"><a
className="cursor-pointer font-normal font-worksans not-italic text-[16px] text-left text-white_A700" href="javascript:"


>
About Us
</a></li></ul></div><div
  className="flex md:flex-1 flex-col gap-[39px] items-start justify-start md:w-[100%] w-[24%]"
  

  
  ><Text
    className="font-semibold font-worksans text-left text-white_A700 w-[auto]"
     variant="body1"

    
  >Contact Us</Text><ul
  className="flex flex-col items-start justify-start w-[100%] common-column-list"
  

  
  ><li className="w-[auto]"><Text
    className="cursor-pointer font-normal font-worksans not-italic text-left text-white_A700"
     variant="body2"

    
  >Call: (237) 681-812-255</Text></li><li className="mt-[10px] w-[auto]"><a
className="cursor-pointer font-normal font-worksans not-italic text-[16px] text-left text-white_A700" href="javascript:"


>
Email: fildineesoe@gmail.com
</a></li><li className="mt-[10px] w-[auto]"><a
className="cursor-pointer font-normal font-worksans not-italic text-[16px] text-left text-white_A700" href="javascript:"


>
Address: 0123 Some place
</a></li><li className="mt-[10px] w-[auto]"><a
className="cursor-pointer font-normal font-worksans not-italic text-[16px] text-left text-white_A700" href="javascript:"


>
Some country
</a></li></ul></div><div
  className="flex md:flex-1 flex-col gap-[38px] items-start justify-start md:w-[100%] w-[28%]"
  

  
  ><Text
    className="font-semibold font-worksans text-left text-white_A700 w-[auto]"
     variant="body1"

    
  >Newsletter</Text><Input

  className="font-normal font-worksans not-italic p-[0] text-[16px] placeholder:text-indigo_900 text-indigo_900 text-left w-[100%]"
  wrapClassName="flex w-[100%]"
    
    name="GroupEightyNine"
    placeholder  = "Enter your email address"
    suffix={<div className="h-[29px] ml-[24px] mr-[11px] w-[29px] bg-indigo_900"><Img
        src="images/img_send.svg"
        className="my-[auto]"
        

        
        alt="send"
      /></div>}shape="RoundedBorder5"
size="md"
variant="FillBlue100"
  ></Input></div></div><Line
    className="bg-blue_100 h-[1px] mt-[47px] w-[100%]"
    
    
  /><div
  className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[43px] w-[100%]"
  
  
  ><Text
    className="font-normal font-worksans md:mt-[0] mt-[3px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</Text><Img
        src="images/img_trash.svg"
        className="h-[24px] md:ml-[0] ml-[422px] w-[24px]"
        

        
        alt="trash"
      /><Img
        src="images/img_facebook_1.svg"
        className="common-pointer h-[24px] md:ml-[0] ml-[20px] w-[24px]"
        onClick={handleNavigate4}

        
        alt="facebook Three"
      /><Img
        src="images/img_eye.svg"
        className="h-[24px] md:ml-[0] ml-[20px] w-[24px]"
        

        
        alt="eye"
      /></div></div></div></footer>
        
      </>);
    };

    Footer.defaultProps = {};
  

    export default Footer;
  