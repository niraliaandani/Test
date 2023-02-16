
    import React from 'react';

    
    import {Button,Img,Text,List,Input,Line,Slider,PagerIndicator,SelectBox,TextArea} from 'components'
  import {CloseSVG} from '../../assets/images'
  import {Accordion,AccordionItem,AccordionItemPanel,AccordionItemState,AccordionItemHeading,AccordionItemButton} from 'react-accessible-accordion'
  import {useNavigate} from 'react-router-dom'
  
    

    

    const ComponentsPage = () => {
      const navigate = useNavigate();
  
      function handleNavigate5() {window.location.href = "https://www.facebook.com/login/"}
  function handleNavigate6() {window.location.href = "https://www.facebook.com/login/"}
  
      const sliderRef = React.useRef(null)
  const [sliderState, setsliderState] = React.useState(0)
  const [inputvalue,setInputvalue] = React.useState("")
  
      return (<>
        <div
    className="bg-white_A700_01 font-worksans h-[7364px] mx-[auto] p-[59px] sm:px-[20px] md:px-[40px] relative w-[100%]"
      

    
  ><div
  className="absolute flex flex-col items-start justify-start left-[1%] top-[1%] w-[54%]"
  

  
  ><div
  className="flex flex-row gap-[11px] items-center justify-start md:w-[100%] w-[22%]"
  
  
  ><Button
  className="cursor-pointer font-medium leading-[normal] min-w-[123px] text-[16px] text-center text-indigo_900 w-[auto]"
    
    


  >Button</Button><Button
  className="flex items-center justify-center text-center"
    
    rightIcon={<div className="h-[10px] ml-[8px] w-[10px] outline-indigo_900 outline-[1px] outline text-center"><Img
        src="images/img_arrowright.svg"
        className="text-center"
        

        
        alt="arrow_right"
      /></div>}


  ><div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-indigo_900 text-left">Read More</div></Button></div><div
  className="flex flex-row gap-[10px] items-center justify-center mt-[14px] w-[auto]"
  
  
  ><Text
    className="font-normal not-italic text-blue_500 text-left w-[auto]"
     variant="body2"

    
  >Learn More</Text><Img
        src="images/img_arrowright.svg"
        className="h-[10px] w-[10px]"
        

        
        alt="arrowright"
      /></div><div
  className="bg-indigo_900 flex sm:flex-col flex-row gap-[56px] items-center justify-center mt-[73px] px-[20px] py-[25px] rounded-[5px] sm:w-[100%] w-[auto]"
  
  
  ><Text
    className="font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >Book an Appointment</Text><Img
        src="images/img_calculator_blue_100.svg"
        className="h-[50px] w-[50px]"
        

        
        alt="calculator"
      /><Img
        src="images/img_user_42x50.svg"
        className="h-[42px] w-[50px]"
        

        
        alt="user"
      /><Img
        src="images/img_camera_36x50.svg"
        className="h-[36px] w-[50px]"
        

        
        alt="camera"
      /></div><div
  className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between mt-[76px] md:w-[100%] w-[95%]"
  
  
  ><div
  className="flex flex-col items-start justify-start w-[auto]"
  

  
  ><Img
        src="defaultNoData.png"
        className="h-[350px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] md:w-[100%] w-[317px]"
        

        
        alt="RectangleTwenty"
      /><div
  className="bg-blue_100 flex items-center justify-end p-[24px] sm:px-[20px] w-[100%]"
  

  
  ><div
  className="flex flex-col items-center justify-start md:w-[100%] w-[51%]"
  

  
  ><Text
    className="font-normal not-italic text-indigo_900 text-left w-[auto]"
     variant="body1"

    
  >Doctor’s Name</Text><Text
    className="font-bold mt-[9px] text-indigo_900 text-left tracking-[2.88px] uppercase w-[auto]"
     variant="body1"

    
  >Neurology</Text><div
  className="flex flex-row gap-[20px] items-center justify-between mt-[14px] md:w-[100%] w-[83%]"
  
  
  ><Img
        src="images/img_linkedin.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="linkedin"
      /><Img
        src="images/img_facebook_24x24.svg"
        className="common-pointer h-[24px] w-[24px]"
        onClick={handleNavigate5}

        
        alt="facebook"
      /><Img
        src="images/img_camera_24x24.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="camera One"
      /></div></div></div><Button
  className="cursor-pointer font-normal min-w-[317px] not-italic text-[16px] text-blue_100 text-center w-[auto]"
    
    shape="CustomBorderBL5"

variant="FillIndigo900"
  >View Profile</Button></div><List
    className="border-[1px] border-deep_purple_A200 border-solid flex-col gap-[20px] grid p-[20px] rounded-[5px] md:w-[100%] w-[41%]"
    
    orientation="vertical"
    
  ><div
  className="bg-white_A700 hover:cursor-pointer flex sm:flex-col flex-row gap-[20px] items-center justify-start sm:pr-[20px] pr-[32px] rounded-[5px] hover:shadow-bs w-[100%]"
  
  
  ><Img
        src="defaultNoData.png"
        className="sm:flex-1 h-[154px] md:h-[auto] object-cover rounded-bl-[5px] rounded-br-[0] rounded-tl-[5px] rounded-tr-[0] sm:w-[100%] w-[36%]"
        

        
        alt="RectangleThirtyFour"
      /><div
  className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[61%]"
  

  
  ><Text
    className="font-normal not-italic text-blue_500 text-left w-[auto]"
     variant="body3"

    
  >Monday 05, September 2021 | By Author</Text><Text
    className="font-normal leading-[140.00%] mt-[6px] not-italic text-gray_900 text-left"
     variant="body1"

    
  >This Article’s Title goes Here, <br />but not too long.</Text><div
  className="flex flex-row gap-[10px] items-center justify-start mt-[23px] md:w-[100%] w-[33%]"
  
  
  ><div
  className="flex flex-row items-center justify-evenly w-[45%]"
  
  
  ><Img
        src="images/img_instagram.svg"
        className="h-[10px] w-[auto]"
        

        
        alt="instagram"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body3"

    
  >68</Text></div><div
  className="flex flex-row items-center justify-evenly w-[45%]"
  
  
  ><Img
        src="images/img_favorite.svg"
        className="h-[14px] w-[auto]"
        

        
        alt="favorite"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body3"

    
  >86</Text></div></div></div></div><div
  className="bg-white_A700 hover:cursor-pointer flex sm:flex-col flex-row gap-[20px] items-center justify-start sm:pr-[20px] pr-[32px] rounded-[5px] hover:shadow-bs shadow-bs w-[100%]"
  
  
  ><Img
        src="defaultNoData.png"
        className="sm:flex-1 h-[154px] md:h-[auto] object-cover rounded-bl-[5px] rounded-br-[0] rounded-tl-[5px] rounded-tr-[0] sm:w-[100%] w-[36%]"
        

        
        alt="RectangleThirtyFour One"
      /><div
  className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[61%]"
  

  
  ><Text
    className="font-normal not-italic text-blue_500 text-left w-[auto]"
     variant="body3"

    
  >Monday 05, September 2021 | By Author</Text><Text
    className="font-normal leading-[140.00%] mt-[6px] not-italic text-gray_900 text-left"
     variant="body1"

    
  >This Article’s Title goes Here, <br />but not too long.</Text><div
  className="flex flex-row gap-[10px] items-center justify-start mt-[23px] md:w-[100%] w-[33%]"
  
  
  ><div
  className="flex flex-row items-center justify-evenly w-[45%]"
  
  
  ><Img
        src="images/img_instagram.svg"
        className="h-[10px] w-[auto]"
        

        
        alt="instagram One"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body3"

    
  >68</Text></div><div
  className="flex flex-row items-center justify-evenly w-[45%]"
  
  
  ><Img
        src="images/img_favorite.svg"
        className="h-[14px] w-[auto]"
        

        
        alt="favorite One"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body3"

    
  >86</Text></div></div></div></div></List></div><div
  className="bg-white_A700 flex md:flex-col flex-row font-yesevaone gap-[176px] md:gap-[40px] items-center justify-start mt-[185px] p-[17px] w-[100%]"
  
  
  ><Text
    className="common-pointer md:ml-[0] ml-[169px] not-italic text-indigo_900 text-left uppercase w-[auto]"
     as="h2" variant="h2"onClick={() => navigate('/')}

    
  ><span  className="md:text-[34px] sm:text-[32px] text-indigo_900 text-[36px] font-yesevaone font-normal" >Med</span><span  className="md:text-[34px] sm:text-[32px] text-blue_500 text-[36px] font-yesevaone font-normal" >dical</span></Text><div
  className="flex md:flex-1 md:flex-col flex-row font-worksans md:gap-[20px] items-center justify-center md:mt-[0] mt-[2px] md:w-[100%] w-[47%]"
  
  
  ><div
  className="flex items-center justify-start md:w-[100%] w-[30%]"
  

  
  ><div
  className="flex flex-row gap-[5px] items-start justify-between w-[100%]"
  
  
  ><Img
        src="images/img_call.svg"
        className="h-[38px] mt-[3px] w-[auto]"
        

        
        alt="call"
      /><div
  className="flex flex-col items-start justify-start w-[auto]"
  

  
  ><Text
    className="font-medium text-indigo_900 text-left uppercase w-[auto]"
     variant="body2"

    
  >Emergency</Text><Text
    className="font-medium mt-[2px] text-blue_500 text-left w-[auto]"
     variant="body2"

    
  >(237) 681-812-255</Text></div></div></div><div
  className="flex items-center justify-start md:ml-[0] ml-[21px] md:w-[100%] w-[36%]"
  

  
  ><div
  className="flex flex-row gap-[9px] items-start justify-between w-[100%]"
  
  
  ><Img
        src="images/img_clock.svg"
        className="h-[30px] mt-[3px] w-[30px]"
        

        
        alt="clock"
      /><div
  className="flex flex-col items-start justify-start w-[auto]"
  

  
  ><Text
    className="font-medium text-indigo_900 text-left uppercase w-[auto]"
     variant="body2"

    
  >Work Hour</Text><Text
    className="font-medium mt-[3px] text-blue_500 text-left w-[auto]"
     variant="body2"

    
  >09:00 - 20:00 Everyday</Text></div></div></div><div
  className="flex items-center justify-start md:ml-[0] ml-[21px] md:w-[100%] w-[28%]"
  

  
  ><div
  className="flex flex-row gap-[9px] items-start justify-between w-[100%]"
  
  
  ><Img
        src="images/img_location.svg"
        className="h-[36px] w-[auto]"
        

        
        alt="location"
      /><div
  className="flex flex-col items-start justify-start w-[auto]"
  

  
  ><Text
    className="font-medium text-indigo_900 text-left uppercase w-[auto]"
     variant="body2"

    
  >Location</Text><Text
    className="font-medium text-blue_500 text-left w-[auto]"
     variant="body2"

    
  >0123 Some Place</Text></div></div></div></div></div><div
  className="bg-indigo_900 flex md:flex-col flex-row font-worksans gap-[276px] md:gap-[40px] items-center justify-center max-w-[1366px] mt-[20px] px-[187px] sm:px-[20px] md:px-[40px] py-[17px] w-[100%]"
  
  
  ><div
  className="flex sm:flex-1 sm:flex-col flex-row gap-[20px] items-start justify-start sm:w-[100%] w-[auto]"
  
  
  ><Text
    className="common-pointer font-semibold text-blue_100 text-left w-[auto]"
     variant="body1"onClick={() => navigate('/')}

    
  >Home</Text><Text
    className="common-pointer font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body1"onClick={() => navigate('/aboutus')}

    
  >About us</Text><Text
    className="common-pointer font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body1"onClick={() => navigate('/services')}

    
  >Services</Text><Text
    className="common-pointer font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body1"onClick={() => navigate('/doctors')}

    
  >Doctors</Text><Text
    className="common-pointer font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body1"onClick={() => navigate('/news')}

    
  >News</Text><Text
    className="common-pointer font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body1"onClick={() => navigate('/contact')}

    
  >Contact</Text></div><div
  className="flex md:flex-1 flex-row gap-[30px] items-center justify-center md:w-[100%] w-[23%]"
  
  
  ><Img
        src="images/img_search.svg"
        className="h-[20px] w-[20px]"
        

        
        alt="search"
      /><Button
  className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[173px] text-[16px] text-center text-indigo_900 w-[auto]"
    onClick={() => navigate('/appointment')}
    


  >Appointment</Button></div></div><div
  className="bg-indigo_900 flex flex-row font-yesevaone items-center justify-between mt-[30px] px-[16px] py-[19px] sm:w-[100%] w-[375px]"
  
  
  ><Text
    className="common-pointer not-italic text-blue_100 text-left uppercase w-[auto]"
     as="h4" variant="h4"onClick={() => navigate('/')}

    
  ><span  className="md:text-[26px] sm:text-[24px] text-blue_100 text-[28px] font-yesevaone font-normal" >Med</span><span  className="md:text-[26px] sm:text-[24px] text-white_A700 text-[28px] font-yesevaone font-normal" >dical</span></Text><Img
        src="images/img_frame222.svg"
        className="h-[20px] w-[124px]"
        

        
        alt="Frame222"
      /></div><div
  className="flex flex-col font-worksans md:gap-[40px] gap-[64px] items-center justify-start mt-[333px] md:w-[100%] w-[73%]"
  

  
  ><div
  className="flex flex-col gap-[6px] items-center justify-start md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-bold font-worksans text-blue_500 text-center tracking-[2.88px] uppercase w-[auto]"
     variant="body1"

    
  >Get in touch</Text><Text
    className="font-yesevaone not-italic text-center text-indigo_900 w-[auto]"
     as="h3" variant="h3"

    
  >Contact</Text></div><div
  className="gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between w-[100%]"
  
  
  ><div
  className="bg-blue_100 flex h-[233px] items-start justify-center p-[26px] sm:px-[20px] rounded-[5px] w-[233px]"
  

  
  ><div
  className="flex flex-col gap-[15px] items-start justify-start my-[25px] md:w-[100%] w-[82%]"
  

  
  ><Img
        src="images/img_call_38x40.svg"
        className="h-[38px] w-[auto]"
        

        
        alt="call One"
      /><div
  className="flex flex-col items-start justify-start md:ml-[0] ml-[4px] md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-bold text-indigo_900 text-left uppercase w-[auto]"
     variant="body1"

    
  >Emergency</Text><Text
    className="font-normal mt-[8px] not-italic text-indigo_900 text-left w-[auto]"
     variant="body2"

    
  >(237) 681-812-255</Text><Text
    className="font-normal mt-[8px] not-italic text-indigo_900 text-left w-[auto]"
     variant="body2"

    
  >(237) 666-331-894</Text></div></div></div><div
  className="bg-indigo_900 flex h-[233px] items-start justify-center p-[30px] sm:px-[20px] rounded-[5px] w-[233px]"
  

  
  ><div
  className="flex flex-col gap-[16px] items-start justify-start mb-[20px] mt-[23px] md:w-[100%] w-[89%]"
  

  
  ><Img
        src="images/img_location_36x30.svg"
        className="h-[36px] w-[auto]"
        

        
        alt="location Two"
      /><div
  className="flex flex-col items-start justify-start w-[100%]"
  

  
  ><Text
    className="font-bold text-blue_100 text-left uppercase w-[auto]"
     variant="body1"

    
  >Location</Text><Text
    className="font-normal mt-[9px] not-italic text-blue_100 text-left w-[auto]"
     variant="body2"

    
  >0123 Some place</Text><Text
    className="font-normal mt-[8px] not-italic text-blue_100 text-left w-[auto]"
     variant="body2"

    
  >9876 Some country</Text></div></div></div><div
  className="bg-blue_100 flex h-[233px] items-center justify-center p-[21px] sm:px-[20px] rounded-[5px] w-[233px]"
  

  
  ><div
  className="flex flex-col gap-[19px] items-start justify-start mb-[33px] mt-[36px] md:w-[100%] w-[96%]"
  

  
  ><Img
        src="images/img_mail.svg"
        className="h-[29px] w-[auto]"
        

        
        alt="mail"
      /><div
  className="flex flex-col items-start justify-start w-[100%]"
  

  
  ><Text
    className="font-bold text-indigo_900 text-left uppercase w-[auto]"
     variant="body1"

    
  >Email</Text><Text
    className="font-normal mt-[9px] not-italic text-indigo_900 text-left w-[auto]"
     variant="body2"

    
  >fildineeesoe@gmil.com</Text><Text
    className="font-normal mt-[6px] not-italic text-indigo_900 text-left w-[auto]"
     variant="body3"

    
  >myebstudios@gmail.com</Text></div></div></div><div
  className="bg-blue_100 flex h-[233px] items-end justify-end p-[16px] rounded-[5px] w-[233px]"
  

  
  ><div
  className="flex flex-col gap-[19px] items-start justify-start mb-[34px] mt-[40px] md:w-[100%] w-[94%]"
  

  
  ><Img
        src="images/img_clock_30x30.svg"
        className="h-[30px] w-[30px]"
        

        
        alt="clock One"
      /><div
  className="flex flex-col items-start justify-start w-[100%]"
  

  
  ><Text
    className="font-bold text-indigo_900 text-left uppercase w-[auto]"
     variant="body1"

    
  >Working Hours</Text><Text
    className="font-normal mt-[8px] not-italic text-indigo_900 text-left w-[auto]"
     variant="body2"

    
  >Mon-Sat 09:00-20:00</Text><Text
    className="font-normal mt-[9px] not-italic text-indigo_900 text-left w-[auto]"
     variant="body2"

    
  >Sunday Emergency only</Text></div></div></div></div></div></div><div
  className="absolute flex flex-col items-center justify-start left-[1%] top-[30%] w-[57%]"
  

  
  ><div
  className="bg-indigo_900 flex items-center justify-start p-[69px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[96%]"
  

  
  ><div
  className="flex flex-col items-center justify-start mb-[3px] md:w-[100%] w-[81%]"
  

  
  ><div
  className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]"
  
  
  ><div
  className="flex md:flex-1 flex-col gap-[18px] items-start justify-start md:w-[100%] w-[auto]"
  

  
  ><Text
    className="common-pointer font-yesevaone not-italic text-blue_100 text-left uppercase w-[auto]"
     as="h2" variant="h2"onClick={() => navigate('/')}

    
  ><span  className="md:text-[34px] sm:text-[32px] text-blue_100 text-[36px] font-normal" >Med</span><span  className="md:text-[34px] sm:text-[32px] text-blue_100 text-[36px] font-normal" >dical</span></Text><Text
    className="font-normal font-worksans leading-[140.00%] not-italic text-left text-white_A700"
     variant="body1"

    
  >Leading the Way in Medical<br />Execellence, Trusted Care.</Text></div><div
  className="flex md:flex-1 flex-col gap-[39px] items-start justify-start md:mt-[0] mt-[2px] md:w-[100%] w-[15%]"
  

  
  ><Text
    className="font-semibold text-left text-white_A700 w-[auto]"
     variant="body1"

    
  >Important Links</Text><div
  className="flex flex-col items-start justify-start md:w-[100%] w-[103px]"
  

  
  ><Text
    className="common-pointer font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body2"onClick={() => navigate('/appointment')}

    
  >Appointment</Text><Text
    className="common-pointer font-normal mt-[8px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"onClick={() => navigate('/doctors')}

    
  >Doctors</Text><Text
    className="common-pointer font-normal mt-[9px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"onClick={() => navigate('/services')}

    
  >Services</Text><Text
    className="common-pointer font-normal mt-[9px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"onClick={() => navigate('/aboutus')}

    
  >About Us</Text></div></div><div
  className="flex md:flex-1 flex-col gap-[39px] items-start justify-start md:w-[100%] w-[24%]"
  

  
  ><Text
    className="font-semibold text-left text-white_A700 w-[auto]"
     variant="body1"

    
  >Contact Us</Text><div
  className="flex flex-col items-start justify-start w-[100%]"
  

  
  ><Text
    className="font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >Call: (237) 681-812-255</Text><Text
    className="font-normal mt-[10px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >Email: fildineesoe@gmail.com</Text><Text
    className="font-normal mt-[10px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >Address: 0123 Some place</Text><Text
    className="font-normal mt-[10px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >Some country</Text></div></div><div
  className="flex md:flex-1 flex-col gap-[38px] items-start justify-start md:w-[100%] w-[28%]"
  

  
  ><Text
    className="font-semibold text-left text-white_A700 w-[auto]"
     variant="body1"

    
  >Newsletter</Text><Input

  className="font-normal not-italic p-[0] text-[16px] placeholder:text-indigo_900 text-indigo_900 text-left w-[100%]"
  wrapClassName="flex w-[100%]"
    type="email"
    name="GroupEightyNine"
    placeholder  = "Enter your email address"
    suffix={<div className="h-[29px] ml-[24px] mr-[0] w-[29px] bg-indigo_900"><Img
        src="images/img_send_29x29.svg"
        className="my-[auto]"
        

        
        alt="send"
      /></div>}shape="RoundedBorder5"
size="sm"
variant="FillBlue100"
  ></Input></div></div><Line
    className="bg-blue_100 h-[1px] mt-[47px] w-[100%]"
    
    
  /><div
  className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start mt-[43px] w-[100%]"
  
  
  ><Text
    className="font-normal md:mt-[0] mt-[3px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</Text><Img
        src="images/img_trash.svg"
        className="h-[24px] md:ml-[0] ml-[422px] w-[24px]"
        

        
        alt="trash"
      /><Img
        src="images/img_facebook_3.svg"
        className="common-pointer h-[24px] md:ml-[0] ml-[20px] w-[24px]"
        onClick={handleNavigate6}

        
        alt="facebook One"
      /><Img
        src="images/img_eye_24x24.svg"
        className="h-[24px] md:ml-[0] ml-[20px] w-[24px]"
        

        
        alt="eye"
      /></div></div></div><div
  className="flex flex-col items-center justify-start mt-[86px] md:w-[100%] w-[70%]"
  

  
  ><div
  className="flex flex-col gap-[6px] items-center justify-start md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-bold font-worksans text-blue_500 text-center tracking-[2.88px] uppercase w-[auto]"
     variant="body1"

    
  >Trusted Care</Text><Text
    className="font-yesevaone not-italic text-center text-indigo_900 w-[auto]"
     as="h3" variant="h3"

    
  >Our Doctors</Text></div><Slider
      autoPlay autoPlayInterval={2000}
      
      
      
      activeIndex={sliderState}
      responsive={{
        0: { items: 1 },
      550: { items: 2 },
        1050: { items: 3 },
      }}
      onSlideChanged={(e) => {
        setsliderState(e?.item);
      }}
      
      
      
      ref={sliderRef}
      className="gap-[20px] mt-[64px] w-[100%]"
      items={[...Array(9)].map(()=><React.Fragment key={Math.random()}>
              <div
  className="flex flex-col items-start justify-start mx-[10px]"
  

  
  ><Img
        src="defaultNoData.png"
        className="h-[350px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] md:w-[100%] w-[317px]"
        

        
        alt="RectangleTwenty One"
      /><div
  className="bg-blue_100 flex items-center justify-end p-[24px] sm:px-[20px] w-[100%]"
  

  
  ><div
  className="flex flex-col items-center justify-start md:w-[100%] w-[51%]"
  

  
  ><Text
    className="font-normal not-italic text-indigo_900 text-left w-[auto]"
     variant="body1"

    
  >Doctor’s Name</Text><Text
    className="font-bold mt-[9px] text-indigo_900 text-left tracking-[2.88px] uppercase w-[auto]"
     variant="body1"

    
  >Neurology</Text><div
  className="flex flex-row gap-[20px] items-center justify-between mt-[14px] md:w-[100%] w-[83%]"
  
  
  ><Img
        src="images/img_linkedin_24x24.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="linkedin One"
      /><Img
        src="images/img_facebook_2.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="facebook Two"
      /><Img
        src="images/img_camera_1.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="camera Two"
      /></div></div></div><Button
  className="cursor-pointer font-normal min-w-[317px] not-italic text-[16px] text-blue_100 text-center w-[auto]"
    
    shape="CustomBorderBL5"

variant="FillIndigo900"
  >View Profile</Button></div>
            </React.Fragment>)}
      renderDotsItem={({ isActive }) => {
                if (isActive) {
                    return (
                        <div className="inline-block cursor-pointer rounded-[50%] h-[18px] bg-indigo_900 w-[18px]" />
                    );
                }
                return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue_100 w-[18px]"
                      role="button"
                      tabIndex={0}
                    />
                );
            }}
    /><PagerIndicator
    className="flex h-[18px] justify-center mt-[32px] w-[74px]"
    
    
    count={3}
    activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-indigo_900 w-[18px]"
    activeIndex={sliderState}
    inactiveCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue_100 w-[18px]"
    sliderRef={sliderRef}
    selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
    unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
  /></div><div
  className="flex flex-col gap-[185px] md:gap-[40px] items-center justify-start mt-[492px] md:w-[100%] w-[96%]"
  

  
  ><div
    className="h-[250px] relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[250px] m-[auto] object-cover w-[100%]"
        

        
        alt="RectangleThree"
      /><div
  className="absolute bg-white_A700_7f flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]"
  

  
  ><div
  className="bg-cover bg-no-repeat flex h-[250px] items-start justify-start p-[78px] sm:px-[20px] md:px-[40px] w-[100%]"
  style={{"backgroundImage":"url('images/img_group203.svg')"}}

  
  ><div
  className="flex flex-col items-start justify-start mb-[19px] md:ml-[0] ml-[107px] md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-normal font-worksans not-italic text-indigo_900 text-left w-[auto]"
     variant="body1"

    
  >Home / About</Text><Text
    className="font-yesevaone not-italic text-indigo_900 text-left w-[auto]"
     as="h1" variant="h1"

    
  >About us</Text></div></div></div></div><div
    className="h-[441px] relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[441px] m-[auto] object-cover w-[100%]"
        

        
        alt="RectangleFiftyThree"
      /><div
  className="absolute bg-indigo_900_90 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[64px] sm:px-[20px] md:px-[40px] w-[100%]"
  

  
  ><div
  className="flex flex-col items-center justify-start md:w-[100%] w-[54%]"
  

  
  ><Img
        src="images/img_vector.svg"
        className="h-[30px] w-[auto]"
        

        
        alt="Vector"
      /><Text
    className="leading-[140.00%] mt-[40px] not-italic text-center text-white_A700 w-[100%]"
     as="h6" variant="h6"

    
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur Consequat faucibus porttitor enim et.</Text><Line
    className="bg-blue_100 h-[1px] mt-[20px] w-[34%]"
    
    
  /><Text
    className="mt-[21px] not-italic text-center text-white_A700 w-[auto]"
     as="h6" variant="h6"

    
  >John Doe</Text><PagerIndicator
    className="flex h-[18px] justify-center mt-[32px] w-[74px]"
    
    
    count={3}
    activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue_100 w-[18px]"
    activeIndex={1}
    inactiveCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-white_A700 w-[18px]"
    
    selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
    unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
  /></div></div></div></div></div><div
  className="absolute bottom-[17%] flex flex-col md:gap-[40px] gap-[86px] justify-start left-[4%] w-[83%]"
  

  
  ><div
  className="flex items-center justify-start md:ml-[0] ml-[26px] md:w-[100%] w-[48%]"
  

  
  ><Img
        src="defaultNoData.png"
        className="h-[450px] md:h-[auto] object-cover rounded-[5px] w-[100%]"
        

        
        alt="Map"
      /></div><div
  className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]"
  
  
  ><div
  className="flex md:flex-1 flex-col items-start justify-start md:w-[100%] w-[32%]"
  

  
  ><Img
        src="defaultNoData.png"
        className="h-[400px] sm:h-[auto] object-cover w-[100%]"
        

        
        alt="RectangleThirteen"
      /><div
  className="flex sm:flex-col flex-row font-worksans sm:gap-[20px] items-start justify-start mt-[25px] md:w-[100%] w-[77%]"
  
  
  ><div
  className="flex flex-row gap-[8px] items-start justify-start sm:w-[100%] w-[49%]"
  
  
  ><Img
        src="images/img_calendar.svg"
        className="h-[17px] w-[16px]"
        

        
        alt="calendar"
      /><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body2"

    
  >Monday 05, September 2021</Text></div><div
  className="flex flex-row gap-[8px] items-start justify-center sm:ml-[0] ml-[25px] sm:w-[100%] w-[20%]"
  
  
  ><Img
        src="images/img_user_18x16.svg"
        className="h-[18px] w-[auto]"
        

        
        alt="user One"
      /><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body2"

    
  >By Author</Text></div><div
  className="flex flex-row gap-[8px] items-start justify-center sm:ml-[0] ml-[24px] sm:w-[100%] w-[9%]"
  
  
  ><Img
        src="images/img_instagram.svg"
        className="h-[10px] mt-[4px] w-[auto]"
        

        
        alt="instagram Two"
      /><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body2"

    
  >68</Text></div><div
  className="flex flex-row gap-[8px] items-center justify-between sm:ml-[0] ml-[24px] sm:w-[100%] w-[9%]"
  
  
  ><Img
        src="images/img_favorite.svg"
        className="h-[14px] w-[auto]"
        

        
        alt="favorite Two"
      /><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body2"

    
  >86</Text></div></div><Text
    className="font-yesevaone mt-[11px] not-italic text-indigo_900 text-left w-[auto]"
     as="h3" variant="h3"

    
  >A passion for putting patients first</Text><Text
    className="font-normal font-worksans leading-[140.00%] mt-[13px] not-italic text-gray_900 text-left w-[100%]"
     variant="body2"

    
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....</Text><Button
  className="flex items-center justify-center mt-[24px] text-center"
    onClick={() => navigate('/singlenews')}
    rightIcon={<div className="h-[10px] ml-[8px] w-[10px] outline-indigo_900 outline-[1px] outline text-center"><Img
        src="images/img_arrowright.svg"
        className="text-center"
        

        
        alt="arrow_right"
      /></div>}


  ><div className="common-pointer bg-transparent cursor-pointer font-medium font-worksans leading-[normal] text-[16px] text-indigo_900 text-left">Read More</div></Button></div><div
  className="bg-gray_50 flex md:flex-1 flex-col items-center justify-end mb-[28px] p-[64px] sm:px-[20px] md:px-[40px] md:w-[100%] w-[66%]"
  

  
  ><div
  className="flex flex-col gap-[5px] items-center justify-start md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-bold font-worksans text-blue_500 text-center tracking-[2.88px] uppercase w-[auto]"
     variant="body1"

    
  >Better information, Better health</Text><Text
    className="font-yesevaone not-italic text-center text-indigo_900 w-[auto]"
     as="h3" variant="h3"

    
  >News</Text></div><div
  className="flex items-center justify-start mt-[64px] md:w-[100%] w-[81%]"
  

  
  ><div
  className="flex items-center justify-start w-[100%]"
  

  
  ><div
    className="gap-[20px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]"
    
    
  ><div
  className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start sm:pr-[20px] pr-[32px] rounded-[5px] hover:shadow-bs shadow-bs hover:w-[100%] w-[100%]"
  
  
  ><Img
        src="defaultNoData.png"
        className="sm:flex-1 h-[154px] md:h-[auto] object-cover rounded-bl-[5px] rounded-br-[0] rounded-tl-[5px] rounded-tr-[0] sm:w-[100%] w-[36%]"
        

        
        alt="RectangleThirtyFour Two"
      /><div
  className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[61%]"
  

  
  ><Text
    className="font-normal not-italic text-blue_500 text-left w-[auto]"
     variant="body3"

    
  >Monday 05, September 2021 | By Author</Text><Text
    className="font-normal leading-[140.00%] mt-[6px] not-italic text-gray_900 text-left"
     variant="body1"

    
  >This Article’s Title goes Here, <br />but not too long.</Text><div
  className="flex flex-row gap-[10px] items-center justify-start mt-[23px] md:w-[100%] w-[33%]"
  
  
  ><div
  className="flex flex-row items-center justify-evenly w-[45%]"
  
  
  ><Img
        src="images/img_instagram.svg"
        className="h-[10px] w-[auto]"
        

        
        alt="instagram Three"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body3"

    
  >68</Text></div><div
  className="flex flex-row items-center justify-evenly w-[45%]"
  
  
  ><Img
        src="images/img_favorite.svg"
        className="h-[14px] w-[auto]"
        

        
        alt="favorite Three"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body3"

    
  >86</Text></div></div></div></div><div
  className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-center sm:pr-[20px] pr-[32px] rounded-[5px] hover:shadow-bs hover:w-[100%] w-[100%]"
  
  
  ><Img
        src="defaultNoData.png"
        className="sm:flex-1 h-[154px] md:h-[auto] object-cover rounded-bl-[5px] rounded-br-[0] rounded-tl-[5px] rounded-tr-[0] sm:w-[100%] w-[36%]"
        

        
        alt="RectangleThirtyFour Three"
      /><div
  className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[61%]"
  

  
  ><Text
    className="font-normal not-italic text-blue_500 text-left w-[auto]"
     variant="body3"

    
  >Monday 05, September 2021 | By Author</Text><Text
    className="font-normal leading-[140.00%] mt-[6px] not-italic text-gray_900 text-left"
     variant="body1"

    
  >This Article’s Title goes Here, <br />but not too long.</Text><div
  className="flex flex-row gap-[10px] items-center justify-start mt-[23px] md:w-[100%] w-[33%]"
  
  
  ><div
  className="flex flex-row items-center justify-evenly w-[45%]"
  
  
  ><Img
        src="images/img_instagram.svg"
        className="h-[10px] w-[auto]"
        

        
        alt="instagram Four"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body3"

    
  >68</Text></div><div
  className="flex flex-row items-center justify-evenly w-[45%]"
  
  
  ><Img
        src="images/img_favorite.svg"
        className="h-[14px] w-[auto]"
        

        
        alt="favorite Four"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body3"

    
  >86</Text></div></div></div></div><div
  className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-start sm:pr-[20px] pr-[32px] rounded-[5px] hover:shadow-bs hover:w-[100%] w-[100%]"
  
  
  ><Img
        src="defaultNoData.png"
        className="sm:flex-1 h-[154px] md:h-[auto] object-cover rounded-bl-[5px] rounded-br-[0] rounded-tl-[5px] rounded-tr-[0] sm:w-[100%] w-[36%]"
        

        
        alt="RectangleThirtyFour Four"
      /><div
  className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[61%]"
  

  
  ><Text
    className="font-normal not-italic text-blue_500 text-left w-[auto]"
     variant="body3"

    
  >Monday 05, September 2021 | By Author</Text><Text
    className="font-normal leading-[140.00%] mt-[6px] not-italic text-gray_900 text-left"
     variant="body1"

    
  >This Article’s Title goes Here, <br />but not too long.</Text><div
  className="flex flex-row gap-[10px] items-center justify-start mt-[23px] md:w-[100%] w-[33%]"
  
  
  ><div
  className="flex flex-row items-center justify-evenly w-[45%]"
  
  
  ><Img
        src="images/img_instagram.svg"
        className="h-[10px] w-[auto]"
        

        
        alt="instagram Five"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body3"

    
  >68</Text></div><div
  className="flex flex-row items-center justify-evenly w-[45%]"
  
  
  ><Img
        src="images/img_favorite.svg"
        className="h-[14px] w-[auto]"
        

        
        alt="favorite Five"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body3"

    
  >86</Text></div></div></div></div><div
  className="bg-white_A700 hover:cursor-pointer flex flex-1 sm:flex-col flex-row gap-[20px] items-center justify-center sm:pr-[20px] pr-[32px] rounded-[5px] hover:shadow-bs hover:w-[100%] w-[100%]"
  
  
  ><Img
        src="defaultNoData.png"
        className="sm:flex-1 h-[154px] md:h-[auto] object-cover rounded-bl-[5px] rounded-br-[0] rounded-tl-[5px] rounded-tr-[0] sm:w-[100%] w-[36%]"
        

        
        alt="RectangleThirtyFour Five"
      /><div
  className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[61%]"
  

  
  ><Text
    className="font-normal not-italic text-blue_500 text-left w-[auto]"
     variant="body3"

    
  >Monday 05, September 2021 | By Author</Text><Text
    className="font-normal leading-[140.00%] mt-[6px] not-italic text-gray_900 text-left"
     variant="body1"

    
  >This Article’s Title goes Here, <br />but not too long.</Text><div
  className="flex flex-row gap-[10px] items-center justify-start mt-[23px] md:w-[100%] w-[33%]"
  
  
  ><div
  className="flex flex-row items-center justify-evenly w-[45%]"
  
  
  ><Img
        src="images/img_instagram.svg"
        className="h-[10px] w-[auto]"
        

        
        alt="instagram Six"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body3"

    
  >68</Text></div><div
  className="flex flex-row items-center justify-evenly w-[45%]"
  
  
  ><Img
        src="images/img_favorite.svg"
        className="h-[14px] w-[auto]"
        

        
        alt="favorite Six"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body3"

    
  >86</Text></div></div></div></div></div></div></div><PagerIndicator
    className="flex h-[18px] justify-center mt-[32px] w-[74px]"
    
    
    count={3}
    activeCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-indigo_900 w-[18px]"
    activeIndex={1}
    inactiveCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue_100 w-[18px]"
    
    selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
    unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
  /></div></div></div><div
  className="absolute flex md:flex-col flex-row gap-[57px] items-center justify-center right-[13%] top-[5%] w-[29%]"
  
  
  ><List
    className="border-[1px] border-deep_purple_A200 border-solid flex-col gap-[20px] grid p-[20px] rounded-[5px] md:w-[100%] w-[50%]"
    
    orientation="vertical"
    
  ><div
  className="border-[1px] border-indigo_900_63 border-solid flex flex-col gap-[17px] items-center justify-start my-[0] pb-[32px] rounded-[5px] w-[100%]"
  

  
  ><div
    className="flex flex-col relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[300px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]"
        

        
        alt="RectangleTwenty Four"
      /><div
  className="bg-indigo_900 flex h-[80px] items-center justify-end ml-[auto] mr-[20px] mt-[-40px] p-[26px] sm:px-[20px] rounded-[50%] w-[80px] z-[1]"
  

  
  ><Img
        src="images/img_dashboard_26x26.svg"
        className="h-[26px] w-[26px]"
        

        
        alt="dashboard"
      /></div></div><div
  className="flex flex-col items-start justify-start md:w-[100%] w-[88%]"
  

  
  ><Text
    className="text-indigo_900 text-left w-[auto]"
     as="h5" variant="h5"

    
  >Free Checkup</Text><Text
    className="font-normal leading-[140.00%] mt-[5px] not-italic text-gray_900 text-left w-[100%]"
     variant="body2"

    
  >Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</Text><div
  className="common-pointer flex flex-row gap-[10px] items-center justify-center mt-[16px] w-[auto]"
  onClick={() => navigate('/singleservice')}
  
  ><Text
    className="font-normal not-italic text-blue_500 text-left w-[auto]"
     variant="body2"

    
  >Learn More</Text><Img
        src="images/img_arrowright.svg"
        className="h-[10px] w-[10px]"
        

        
        alt="arrowright One"
      /></div></div></div><div
  className="border-[1px] border-indigo_900_63 border-solid flex flex-col gap-[57px] items-center justify-start my-[0] pb-[32px] rounded-[5px] w-[100%]"
  

  
  ><div
    className="h-[300px] relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[300px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]"
        

        
        alt="RectangleTwenty Five"
      /><div
  className="absolute bg-indigo_900_a2 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[125px] sm:px-[20px] md:px-[40px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]"
  

  
  ><Img
        src="images/img_dashboard_26x26.svg"
        className="h-[48px] w-[48px]"
        

        
        alt="dashboard One"
      /></div></div><div
  className="flex flex-col items-start justify-start md:w-[100%] w-[88%]"
  

  
  ><Text
    className="text-indigo_900 text-left w-[auto]"
     as="h5" variant="h5"

    
  >Free Checkup</Text><Text
    className="font-normal leading-[140.00%] mt-[5px] not-italic text-gray_900 text-left w-[100%]"
     variant="body2"

    
  >Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.</Text><div
  className="common-pointer flex flex-row gap-[10px] items-center justify-center mt-[16px] w-[auto]"
  onClick={() => navigate('/singleservice')}
  
  ><Text
    className="font-normal not-italic text-blue_500 text-left w-[auto]"
     variant="body2"

    
  >Learn More</Text><Img
        src="images/img_arrowright.svg"
        className="h-[10px] w-[10px]"
        

        
        alt="arrowright Two"
      /></div></div></div></List><div
  className="flex flex-col gap-[20px] items-center justify-start md:w-[100%] w-[44%]"
  

  
  ><div
  className="flex flex-col gap-[20px] items-start justify-start w-[100%]"
  

  
  ><Input

    value={inputvalue}
    onChange={(e) => setInputvalue(e?.target?.value)}
  className="font-normal gap-[200px] not-italic p-[0] text-[16px] text-left placeholder:text-white_A700_a2 text-white_A700_a2 w-[100%]"
  wrapClassName="flex w-[100%]"
    
    name="NewsSearchInput"
    placeholder  = "Search"
    suffix={inputvalue?.length>0? <CloseSVG
    className="cursor-pointer ml-[35px] mr-[0] my-[auto]"
    onClick={()=>setInputvalue("")}
     color="#a2fcfefe" /> :<Img
        src="images/img_search_20x20.svg"
        className="cursor-pointer ml-[35px] mr-[0] my-[auto]"
        

        
        alt="search"
      />}shape="srcRoundedBorder5"
size="smSrc"
variant="srcFillIndigo900"
  ></Input><div
  className="bg-white_A700_6c border-[1px] border-indigo_900_6c border-solid flex flex-col font-yesevaone gap-[24px] items-start justify-start p-[19px] rounded-[5px] w-[100%]"
  

  
  ><Text
    className="not-italic text-indigo_900 text-left w-[auto]"
     as="h3" variant="h3"

    
  >Recent Posts</Text><List
    className="flex-col font-worksans gap-[8px] grid items-center w-[100%]"
    
    orientation="vertical"
    
  ><div
  className="flex flex-1 flex-row gap-[10px] items-center justify-between w-[100%]"
  
  
  ><Img
        src="defaultNoData.png"
        className="h-[60px] md:h-[auto] object-cover rounded-[5px] w-[60px]"
        

        
        alt="RectangleSixtyOne"
      /><div
  className="flex flex-col items-start justify-start w-[auto]"
  

  
  ><Text
    className="not-italic text-blue_500 text-left w-[auto]"
     variant="body4"

    
  >Monday 05, September 2021</Text><Text
    className="font-medium mt-[3px] text-gray_900 text-left"
     variant="body3"

    
  >This Article’s Title goes Here, <br />but not too long.</Text></div></div><div
  className="flex flex-1 flex-row gap-[10px] items-center justify-between w-[100%]"
  
  
  ><Img
        src="defaultNoData.png"
        className="h-[60px] md:h-[auto] object-cover rounded-[5px] w-[60px]"
        

        
        alt="RectangleSixtyOne One"
      /><div
  className="flex flex-col items-start justify-start w-[auto]"
  

  
  ><Text
    className="not-italic text-blue_500 text-left w-[auto]"
     variant="body4"

    
  >Monday 05, September 2021</Text><Text
    className="font-medium mt-[3px] text-gray_900 text-left"
     variant="body3"

    
  >This Article’s Title goes Here, <br />but not too long.</Text></div></div><div
  className="flex flex-1 flex-row gap-[10px] items-center justify-between w-[100%]"
  
  
  ><Img
        src="defaultNoData.png"
        className="h-[60px] md:h-[auto] object-cover rounded-[5px] w-[60px]"
        

        
        alt="RectangleSixtyOne Two"
      /><div
  className="flex flex-col items-start justify-start w-[auto]"
  

  
  ><Text
    className="not-italic text-blue_500 text-left w-[auto]"
     variant="body4"

    
  >Monday 05, September 2021</Text><Text
    className="font-medium mt-[3px] text-gray_900 text-left"
     variant="body3"

    
  >This Article’s Title goes Here, <br />but not too long.</Text></div></div><div
  className="flex flex-1 flex-row gap-[10px] items-center justify-between w-[100%]"
  
  
  ><Img
        src="defaultNoData.png"
        className="h-[60px] md:h-[auto] object-cover rounded-[5px] w-[60px]"
        

        
        alt="RectangleSixtyOne Three"
      /><div
  className="flex flex-col items-start justify-start w-[auto]"
  

  
  ><Text
    className="not-italic text-blue_500 text-left w-[auto]"
     variant="body4"

    
  >Monday 05, September 2021</Text><Text
    className="font-medium mt-[3px] text-gray_900 text-left"
     variant="body3"

    
  >This Article’s Title goes Here, <br />but not too long.</Text></div></div><div
  className="flex flex-1 flex-row gap-[10px] items-center justify-between w-[100%]"
  
  
  ><Img
        src="defaultNoData.png"
        className="h-[60px] md:h-[auto] object-cover rounded-[5px] w-[60px]"
        

        
        alt="RectangleSixtyOne Four"
      /><div
  className="flex flex-col items-start justify-start w-[auto]"
  

  
  ><Text
    className="not-italic text-blue_500 text-left w-[auto]"
     variant="body4"

    
  >Monday 05, September 2021</Text><Text
    className="font-medium mt-[3px] text-gray_900 text-left"
     variant="body3"

    
  >This Article’s Title goes Here, <br />but not too long.</Text></div></div><div
  className="flex flex-1 flex-row gap-[10px] items-center justify-between w-[100%]"
  
  
  ><Img
        src="defaultNoData.png"
        className="h-[60px] md:h-[auto] object-cover rounded-[5px] w-[60px]"
        

        
        alt="RectangleSixtyOne Five"
      /><div
  className="flex flex-col items-start justify-start w-[auto]"
  

  
  ><Text
    className="not-italic text-blue_500 text-left w-[auto]"
     variant="body4"

    
  >Monday 05, September 2021</Text><Text
    className="font-medium mt-[3px] text-gray_900 text-left"
     variant="body3"

    
  >This Article’s Title goes Here, <br />but not too long.</Text></div></div></List></div><div
  className="flex flex-row font-worksans gap-[10px] items-center justify-start md:w-[100%] w-[88%]"
  
  
  ><Img
        src="defaultNoData.png"
        className="h-[60px] md:h-[auto] object-cover rounded-[5px] w-[60px]"
        

        
        alt="RectangleSixtyOne Six"
      /><div
  className="flex flex-col items-start justify-start w-[auto]"
  

  
  ><Text
    className="not-italic text-blue_500 text-left w-[auto]"
     variant="body4"

    
  >Monday 05, September 2021</Text><Text
    className="font-medium mt-[3px] text-gray_900 text-left"
     variant="body3"

    
  >This Article’s Title goes Here, <br />but not too long.</Text></div></div><div
  className="bg-white_A700_6c border-[1px] border-indigo_900_6c border-solid flex flex-col font-yesevaone gap-[21px] items-start justify-start p-[20px] rounded-[5px] w-[100%]"
  

  
  ><Text
    className="mt-[2px] not-italic text-indigo_900 text-left w-[auto]"
     as="h3" variant="h3"

    
  >Categories</Text><div
  className="bg-white_A700_6c flex flex-row font-worksans items-center justify-between p-[12px] rounded-[5px] w-[100%]"
  
  
  ><Text
    className="font-normal ml-[7px] not-italic text-gray_900 text-left w-[auto]"
     variant="body1"

    
  >Surgery</Text><Text
    className="bg-blue_500 flex font-normal h-[24px] items-center justify-center mr-[8px] not-italic rounded-[50%] text-center text-white_A700 w-[24px]"
     variant="body2"

    
  >3</Text></div><div
  className="bg-white_A700_6c flex flex-row font-worksans items-center justify-between p-[12px] rounded-[5px] w-[100%]"
  
  
  ><Text
    className="font-normal ml-[7px] not-italic text-gray_900 text-left w-[auto]"
     variant="body1"

    
  >Health Care</Text><Text
    className="bg-blue_500 flex font-normal h-[24px] items-center justify-center mr-[8px] not-italic rounded-[50%] text-center text-white_A700 w-[24px]"
     variant="body2"

    
  >5</Text></div><div
  className="bg-white_A700_6c flex flex-row font-worksans items-center justify-between p-[12px] rounded-[5px] w-[100%]"
  
  
  ><Text
    className="font-normal ml-[7px] not-italic text-gray_900 text-left w-[auto]"
     variant="body1"

    
  >Medical</Text><Text
    className="bg-blue_500 flex font-normal h-[24px] items-center justify-center mr-[8px] not-italic rounded-[50%] text-center text-white_A700 w-[24px]"
     variant="body2"

    
  >8</Text></div><div
  className="bg-white_A700_6c flex flex-row font-worksans items-center justify-between mb-[2px] p-[12px] rounded-[5px] w-[100%]"
  
  
  ><Text
    className="font-normal ml-[7px] not-italic text-gray_900 text-left w-[auto]"
     variant="body1"

    
  >Professional</Text><Text
    className="bg-blue_500 font-normal justify-center mr-[8px] not-italic px-[7px] rounded-[12px] text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >10</Text></div></div></div><div
  className="border-[1px] border-deep_purple_A200 border-solid flex flex-col gap-[20px] items-center justify-start p-[20px] rounded-[5px] w-[100%]"
  

  
  ><div
  className="bg-white_A700_6c flex flex-row items-center justify-between p-[12px] rounded-[5px] w-[100%]"
  
  
  ><Text
    className="font-normal ml-[7px] not-italic text-gray_900 text-left w-[auto]"
     variant="body1"

    
  >Surgery</Text><Text
    className="bg-blue_500 flex font-normal h-[24px] items-center justify-center mr-[8px] not-italic rounded-[50%] text-center text-white_A700 w-[24px]"
     variant="body2"

    
  >3</Text></div><div
  className="bg-white_A700_6c border-[1px] border-indigo_900_6c border-solid flex flex-row items-center justify-between p-[12px] rounded-[5px] w-[100%]"
  
  
  ><Text
    className="font-normal ml-[7px] not-italic text-gray_900 text-left w-[auto]"
     variant="body1"

    
  >Surgery</Text><Text
    className="bg-blue_500 flex font-normal h-[24px] items-center justify-center mr-[8px] not-italic rounded-[50%] text-center text-white_A700 w-[24px]"
     variant="body2"

    
  >3</Text></div></div></div></div><div
  className="absolute bg-blue_100 flex items-center justify-start md:px-[20px] right-[21%] rounded-[5px] top-[25%] w-[20%]"
  

  
  ><div
  className="flex flex-col items-center justify-start w-[100%]"
  

  
  ><div
  className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly w-[100%]"
  
  
  ><div
  className="flex sm:flex-1 flex-col items-center justify-start sm:w-[100%] w-[50%]"
  

  
  ><Text
    className="bg-indigo_900 font-normal h-[50px] not-italic pb-[13px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[17px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[0] text-left text-white_A700 w-[245px]"
     variant="body2"

    
  >Name</Text><Text
    className="bg-indigo_900 font-normal h-[50px] not-italic pl-[20px] sm:pr-[20px] pr-[35px] py-[15px] text-left text-white_A700 w-[245px]"
     variant="body2"

    
  >Email</Text><SelectBox
  className="font-normal not-italic text-[16px] text-left text-white_A700 w-[100%]"
    
    placeholderClassName="text-white_A700"
    name="GroupFortyThree"
    placeholder= "Date"
    isSearchable={false}
    isMulti={false}
    

    
  ></SelectBox><SelectBox
  className="font-normal not-italic text-[16px] text-left text-white_A700 w-[100%]"
    
    placeholderClassName="text-white_A700"
    name="GroupFortySix"
    placeholder= "Doctor"
    isSearchable={false}
    isMulti={false}
    

    
  ></SelectBox></div><Accordion preExpanded={[0]}
    className="sm:flex-1 gap-[1px] sm:w-[100%] w-[50%]"
    
    
  > {[...Array(3)].map((item, index)=> <AccordionItem uuid={index} key={Math.random()}><div
  className="flex flex-col items-center justify-start mb-[102px] w-[100%]"
  

  
  >
      <AccordionItemHeading className="w-full">
      <AccordionItemButton>
      <AccordionItemState>{({ expanded }) => <div
  className="bg-indigo_900 flex flex-row items-end justify-between p-[14px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[5px] w-[100%]"
  
  
  ><Text
    className="font-normal ml-[5px] mt-[2px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >Gender</Text>{ expanded &&<Img
        src="images/img_arrowdown.svg"
        className="h-[9px] mb-[4px] mr-[5px] mt-[7px] w-[auto]"
        

        
        alt="arrowdown"
      /> }{ !expanded &&<Img
        src="images/img_arrowdown.svg"
        className="h-[9px] mr-[5px] my-[5px] w-[auto]"
        

        
        alt="arrowdown One"
      /> }</div> }</AccordionItemState>
      </AccordionItemButton>
      </AccordionItemHeading><AccordionItemPanel className="w-full"><div
  className="flex items-center justify-start w-[100%]"
  

  
  ><Text
    className="bg-indigo_900 font-normal h-[50px] not-italic pl-[20px] sm:pr-[20px] pr-[35px] py-[15px] text-left text-white_A700 w-[245px]"
     variant="body2"

    
  >Phone</Text></div></AccordionItemPanel></div></AccordionItem> )}</Accordion></div><TextArea
  className="font-normal not-italic text-[16px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
    
    name="GroupFortySeven"
    placeholder="Message"

    
  ></TextArea><div
  className="bg-blue_100 flex items-center justify-start p-[15px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
  

  
  ><Text
    className="font-medium text-center text-indigo_900 uppercase w-[auto]"
     variant="body2"

    
  >Submit</Text></div></div></div></div>
        
      </>);
    };

    

    export default ComponentsPage;
  