
    import React from 'react';

    
    import {Text,Img,Button,Input,List,SelectBox,TextArea,Slider,PagerIndicator} from 'components'
  import {Accordion,AccordionItem,AccordionItemPanel,AccordionItemState,AccordionItemHeading,AccordionItemButton} from 'react-accessible-accordion'
  import Footer from 'components/Footer'
  import {useNavigate} from 'react-router-dom'
  
    

    

    const Home1Page = () => {
      const navigate = useNavigate();
  
      function handleNavigate3() {window.location.href = "https://www.facebook.com/login/"}
  
      const sliderRef = React.useRef(null)
  const [sliderState, setsliderState] = React.useState(0)
  const sliderRef1 = React.useRef(null)
  const [sliderState1, setsliderState1] = React.useState(0)
  
      return (<>
        <div
  className="bg-white_A700 flex flex-col font-yesevaone items-center justify-start mx-[auto] w-[100%]"
  

  
  ><header
    className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-center md:px-[20px] w-[100%]"
    
    
  ><Text
    className="md:ml-[0] ml-[187px] md:mt-[0] my-[18px] not-italic text-indigo_900 text-left uppercase w-[auto]"
     as="h2" variant="h2"

    
  ><span  className="md:text-[34px] sm:text-[32px] text-indigo_900 text-[36px] font-yesevaone font-normal" >Med</span><span  className="md:text-[34px] sm:text-[32px] text-blue_500 text-[36px] font-yesevaone font-normal" >dical</span></Text><div
  className="flex md:flex-1 md:flex-col flex-row font-worksans md:gap-[20px] items-center justify-center mb-[17px] md:ml-[0] ml-[176px] mr-[186px] md:mt-[0] mt-[20px] md:w-[100%] w-[46%]"
  
  
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
  className="flex items-center justify-start md:ml-[0] ml-[20px] md:w-[100%] w-[36%]"
  

  
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
  className="flex items-center justify-start md:ml-[0] ml-[20px] md:w-[100%] w-[28%]"
  

  
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

    
  >0123 Some Place</Text></div></div></div></div></header><div
  className="bg-indigo_900 flex md:flex-col flex-row font-worksans gap-[276px] md:gap-[40px] items-center justify-center max-w-[1366px] px-[187px] sm:px-[20px] md:px-[40px] py-[17px] w-[100%]"
  
  
  ><div
  className="flex sm:flex-1 sm:flex-col flex-row gap-[20px] items-start justify-start sm:w-[100%] w-[auto]"
  
  
  ><Text
    className="font-semibold text-blue_100 text-left w-[auto]"
     variant="body1"

    
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
    className="flex flex-col font-worksans md:px-[20px] relative w-[100%]"
      

    
  ><div
    className="h-[550px] mx-[auto] w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[550px] m-[auto] object-cover w-[100%]"
        

        
        alt="PhysicianTrend"
      /><div
  className="absolute bg-gradient  flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]"
  

  
  ><div
  className="bg-cover bg-no-repeat flex h-[550px] items-center justify-start w-[100%]"
  style={{"backgroundImage":"url('images/img_group354.svg')"}}

  
  ><div
    className="h-[550px] relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[550px] m-[auto] object-cover w-[100%]"
        

        
        alt="PhysicianTrend One"
      /><div
  className="absolute flex flex-col h-[max-content] inset-y-[0] items-start justify-start left-[14%] my-[auto] w-[38%]"
  

  
  ><Text
    className="font-bold font-worksans text-blue_500 text-left tracking-[2.88px] uppercase w-[auto]"
     variant="body1"

    
  >Caring for Life</Text><Text
    className="font-yesevaone mt-[6px] not-italic text-indigo_900 text-left"
     as="h1" variant="h1"

    
  >Leading the Way<br />in Medical Excellence</Text><Button
  className="common-pointer cursor-pointer font-medium font-worksans leading-[normal] min-w-[170px] mt-[32px] text-[16px] text-center text-indigo_900 w-[auto]"
    onClick={() => navigate('/services')}
    


  >Our Services</Button></div></div></div></div></div><div
  className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center mt-[-50px] mx-[auto] sm:w-[100%] w-[73%] z-[1]"
  
  
  ><Input

  className="font-normal not-italic p-[0] text-[16px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
  wrapClassName="flex md:w-[100%] sm:w-[100%] w-[32%]"
    
    name="Goals"
    placeholder  = "Book an Appointment"
    suffix={<Img
        src="images/img_calculator.svg"
        className="ml-[35px] mr-[0] my-[auto]"
        

        
        alt="calculator"
      />}shape="RoundedBorder5"
size="lg"
variant="FillIndigo900"
  ></Input><Input

  className="font-normal md:h-[auto] not-italic p-[0] text-[16px] placeholder:text-indigo_900 text-indigo_900 text-left w-[100%]"
  wrapClassName="flex md:ml-[0] md:w-[100%] ml-[20px] sm:ml-[0] sm:w-[100%] w-[32%]"
    
    name="Goals One"
    placeholder  = "Book an Appointment"
    suffix={<Img
        src="images/img_user.svg"
        className="ml-[35px] mr-[0] my-[auto]"
        

        
        alt="user"
      />}shape="RoundedBorder5"
size="xl"
variant="FillBlue100"
  ></Input><Input

  className="font-normal md:h-[auto] not-italic p-[0] text-[16px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
  wrapClassName="flex md:ml-[0] md:w-[100%] ml-[21px] sm:ml-[0] sm:w-[100%] w-[32%]"
    
    name="Goals Two"
    placeholder  = "Book an Appointment"
    suffix={<Img
        src="images/img_camera.svg"
        className="ml-[35px] mr-[0] my-[auto]"
        

        
        alt="camera"
      />}shape="RoundedBorder5"
size="2xl"
variant="FillBlue500"
  ></Input></div></div><div
  className="flex flex-col font-worksans items-center justify-start mt-[64px] md:px-[20px] md:w-[100%] w-[49%]"
  

  
  ><div
  className="flex flex-col gap-[6px] items-center justify-start md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-bold font-worksans text-blue_500 text-center tracking-[2.88px] uppercase w-[auto]"
     variant="body1"

    
  >Welcome to Meddical</Text><Text
    className="font-yesevaone not-italic text-center text-indigo_900 w-[auto]"
     as="h3" variant="h3"

    
  >A Great Place to Receive Care</Text></div><Text
    className="font-normal leading-[140.00%] mt-[15px] not-italic text-center text-gray_900 w-[100%]"
     variant="body2"

    
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</Text><div
  className="common-pointer flex flex-row gap-[10px] items-center justify-center mt-[32px] w-[auto]"
  onClick={() => navigate('/aboutus')}
  
  ><Text
    className="font-normal not-italic text-blue_500 text-left w-[auto]"
     variant="body2"

    
  >Learn More</Text><Img
        src="images/img_arrowright.svg"
        className="h-[10px] w-[10px]"
        

        
        alt="arrowright"
      /></div></div><div
    className="h-[250px] md:h-[311px] max-w-[992px] mt-[61px] mx-[auto] md:px-[20px] relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[250px] m-[auto] object-cover w-[100%]"
        

        
        alt="BlackdoctorsOne"
      /><Img
        src="images/img_group203.svg"
        className="absolute h-[250px] inset-[0] justify-center m-[auto] w-[auto]"
        

        
        alt="Group203"
      /></div><div
  className="flex flex-col font-worksans md:gap-[40px] gap-[64px] items-center justify-start max-w-[992px] mt-[64px] mx-[auto] md:px-[20px] w-[100%]"
  

  
  ><div
  className="flex flex-col gap-[6px] items-center justify-start md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-bold font-worksans text-blue_500 text-center tracking-[2.88px] uppercase w-[auto]"
     variant="body1"

    
  >Care you can believe in</Text><Text
    className="font-yesevaone not-italic text-center text-indigo_900 w-[auto]"
     as="h3" variant="h3"

    
  >Our Services</Text></div><div
  className="flex items-center justify-start w-[100%]"
  

  
  ><div
  className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]"
  
  
  ><div
  className="bg-white_A700_6c border-[1px] border-indigo_900_6c border-solid flex md:flex-1 flex-col gap-[25px] items-center justify-end pt-[24px] rounded-[5px] md:w-[100%] w-[16%]"
  

  
  ><div
  className="flex flex-col gap-[10px] items-center justify-start md:w-[100%] w-[69%]"
  

  
  ><Img
        src="images/img_cut.svg"
        className="h-[32px] w-[32px]"
        

        
        alt="cut"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Free Checkup</Text></div><div
  className="flex flex-col items-center justify-start w-[100%]"
  

  
  ><div
  className="bg-indigo_900 flex items-center justify-start p-[24px] sm:px-[20px] w-[100%]"
  

  
  ><div
  className="flex flex-col gap-[10px] items-center justify-start md:w-[100%] w-[83%]"
  

  
  ><Img
        src="images/img_lock.svg"
        className="h-[28px] w-[auto]"
        

        
        alt="lock"
      /><Text
    className="font-normal not-italic text-blue_100 text-center w-[auto]"
     variant="body2"

    
  >Cardiogram</Text></div></div><div
  className="flex flex-col gap-[10px] items-center justify-start mt-[24px] md:w-[100%] w-[58%]"
  

  
  ><Img
        src="images/img_facebook.svg"
        className="common-pointer h-[32px] w-[32px]"
        onClick={handleNavigate3}

        
        alt="facebook"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Dna Testing</Text></div><div
  className="flex flex-col gap-[8px] items-center justify-start mt-[48px] md:w-[100%] w-[57%]"
  

  
  ><Img
        src="images/img_question.svg"
        className="h-[40px] w-[auto]"
        

        
        alt="question"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Blood Bank</Text></div><div
  className="common-pointer bg-indigo_900 flex items-center justify-start mt-[26px] p-[11px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
  onClick={() => navigate('/aboutus')}

  
  ><Text
    className="font-medium text-blue_100 text-left w-[auto]"
     variant="body3"

    
  >View All</Text></div></div></div><div
  className="flex md:flex-1 flex-col items-start justify-start md:mt-[0] mt-[28px] md:w-[100%] w-[48%]"
  

  
  ><Text
    className="text-black_900 text-left w-[auto]"
     as="h5" variant="h5"

    
  >A passion for putting patients first.</Text><div
  className="flex items-center justify-start mt-[23px] md:w-[100%] w-[89%]"
  

  
  ><div
  className="flex items-center justify-start w-[100%]"
  

  
  ><List
    className="flex-col gap-[20px] grid items-center w-[100%]"
    
    orientation="vertical"
    
  ><div
  className="flex md:flex-1 sm:flex-col flex-row gap-[54px] items-start justify-start mr-[21px] my-[0] md:w-[100%] w-[95%]"
  
  
  ><div
  className="flex flex-row gap-[10px] items-start justify-start sm:w-[100%] w-[54%]"
  
  
  ><div
    className="bg-blue_500 h-[16px] mb-[5px] rounded-[50%] w-[16px]"
    
    
  ></div><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body1"

    
  >A Passion for Healing</Text></div><div
  className="flex flex-row gap-[10px] items-start justify-start sm:w-[100%] w-[33%]"
  
  
  ><div
    className="bg-blue_500 h-[16px] mb-[4px] rounded-[50%] w-[16px]"
    
    
  ></div><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body1"

    
  >5-Star Care</Text></div></div><div
  className="flex md:flex-1 flex-row items-center justify-between mr-[9px] my-[0] md:w-[100%] w-[98%]"
  
  
  ><div
  className="flex flex-row gap-[10px] items-start justify-start w-[32%]"
  
  
  ><div
    className="bg-blue_500 h-[16px] my-[2px] rounded-[50%] w-[16px]"
    
    
  ></div><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body1"

    
  >All our best</Text></div><div
  className="flex flex-row gap-[10px] items-start justify-start w-[35%]"
  
  
  ><div
    className="bg-blue_500 h-[16px] my-[2px] rounded-[50%] w-[16px]"
    
    
  ></div><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body1"

    
  >Believe in Us</Text></div></div><div
  className="flex flex-1 sm:flex-col flex-row gap-[38px] items-center justify-between my-[0] w-[100%]"
  
  
  ><div
  className="flex sm:flex-1 flex-row gap-[10px] items-start justify-start sm:w-[100%] w-[55%]"
  
  
  ><div
    className="bg-blue_500 h-[16px] mb-[5px] rounded-[50%] w-[16px]"
    
    
  ></div><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body1"

    
  >A Legacy of Excellence</Text></div><div
  className="flex sm:flex-1 flex-row gap-[10px] items-start justify-start sm:w-[100%] w-[36%]"
  
  
  ><div
    className="bg-blue_500 h-[16px] mb-[5px] rounded-[50%] w-[16px]"
    
    
  ></div><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body1"

    
  >Always Caring</Text></div></div></List></div></div><div
  className="flex flex-col gap-[16px] items-center justify-start mt-[31px] w-[100%]"
  

  
  ><Text
    className="font-normal leading-[140.00%] not-italic text-gray_900 text-left w-[100%]"
     variant="body2"

    
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</Text><Text
    className="font-normal leading-[140.00%] not-italic text-gray_900 text-left w-[100%]"
     variant="body2"

    
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</Text></div></div><div
  className="flex md:flex-1 flex-col gap-[21px] items-center justify-start md:w-[100%] w-[33%]"
  

  
  ><div
    className="h-[231px] relative w-[100%]"
      

    
  ><Img
        src="images/img_rectangle13.webp"
        className="absolute h-[231px] inset-[0] justify-center m-[auto] object-cover w-[100%]"
        

        
        alt="RectangleThirteen"
      /><Img
        src="images/img_group184.svg"
        className="absolute bottom-[0] h-[8px] inset-x-[0] mx-[auto] w-[auto]"
        

        
        alt="Group184"
      /></div><div
    className="h-[231px] relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[231px] m-[auto] object-cover w-[100%]"
        

        
        alt="RectangleFourteen"
      /><Img
        src="images/img_group184.svg"
        className="absolute bottom-[0] h-[8px] inset-x-[0] mx-[auto] w-[auto]"
        

        
        alt="Group184 One"
      /></div></div></div></div></div><div
  className="flex flex-col font-worksans md:gap-[40px] gap-[61px] items-center justify-start max-w-[992px] mt-[128px] mx-[auto] md:px-[20px] w-[100%]"
  

  
  ><div
  className="flex flex-col gap-[9px] items-center justify-start md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-bold font-worksans text-blue_500 text-center tracking-[2.88px] uppercase w-[auto]"
     variant="body1"

    
  >Always Caring</Text><Text
    className="font-yesevaone not-italic text-center text-indigo_900 w-[auto]"
     as="h3" variant="h3"

    
  >Our Specialties</Text></div><div
    className="h-[516px] relative w-[100%]"
      

    
  ><div
  className="absolute bg-indigo_900 flex items-center justify-start left-[25%] p-[50px] sm:px-[20px] md:px-[40px] rounded-[5px] top-[0] w-[25%]"
  

  
  ><div
  className="flex flex-col gap-[8px] items-center justify-start md:w-[100%] w-[34%]"
  

  
  ><Img
        src="images/img_ticket.svg"
        className="h-[44px] w-[auto]"
        

        
        alt="ticket"
      /><Text
    className="font-normal not-italic text-blue_100 text-center w-[auto]"
     variant="body2"

    
  >Bones</Text></div></div><div
  className="flex flex-col gap-[9px] h-[100%] items-center justify-start ml-[84px] mt-[50px] w-[8%]"
  

  
  ><Img
        src="images/img_clock_44x50.svg"
        className="h-[44px] w-[auto]"
        

        
        alt="clock One"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Neurology</Text></div><div
  className="absolute bg-cover bg-no-repeat flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[45px] sm:px-[20px] md:px-[40px] w-[100%]"
  style={{"backgroundImage":"url('images/img_group356.svg')"}}

  
  ><div
  className="flex flex-col gap-[100px] md:gap-[40px] justify-start my-[4px] md:w-[100%] w-[99%]"
  

  
  ><div
  className="flex flex-row items-center justify-between ml-[auto] md:w-[100%] w-[41%]"
  
  
  ><div
  className="flex flex-col gap-[9px] items-center justify-start w-[73px]"
  

  
  ><Img
        src="images/img_clock_44x50.svg"
        className="h-[44px] w-[auto]"
        

        
        alt="clock Two"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Oncology</Text></div><div
  className="flex flex-col gap-[9px] items-center justify-start w-[44%]"
  

  
  ><Img
        src="images/img_clock_44x50.svg"
        className="h-[44px] w-[auto]"
        

        
        alt="clock Three"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Otorhinolaryngology</Text></div></div><List
    className="flex-col md:gap-[40px] gap-[99px] grid items-center mr-[20px] w-[98%]"
    
    orientation="vertical"
    
  ><div
  className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between w-[100%]"
  
  
  ><div
  className="flex sm:flex-1 flex-col gap-[9px] items-center justify-start sm:w-[100%] w-[14%]"
  

  
  ><Img
        src="images/img_clock_44x50.svg"
        className="h-[44px] w-[auto]"
        

        
        alt="clock Four"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Ophthalmology</Text></div><div
  className="flex sm:flex-1 flex-col gap-[7px] items-center justify-start sm:w-[100%] w-[14%]"
  

  
  ><Img
        src="images/img_clock_44x50.svg"
        className="h-[44px] w-[auto]"
        

        
        alt="clock One"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Cardiovascular</Text></div><div
  className="flex sm:flex-1 flex-col gap-[9px] items-center justify-start sm:w-[100%] w-[12%]"
  

  
  ><Img
        src="images/img_clock_44x50.svg"
        className="h-[44px] w-[auto]"
        

        
        alt="clock Two"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Pulmonology</Text></div><div
  className="flex sm:flex-1 flex-col gap-[7px] items-center justify-start sm:w-[100%] w-[14%]"
  

  
  ><Img
        src="images/img_clock_44x50.svg"
        className="h-[44px] w-[auto]"
        

        
        alt="clock Three"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Renal Medicine</Text></div></div><div
  className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between md:w-[100%] w-[99%]"
  
  
  ><div
  className="flex flex-col gap-[9px] items-center justify-start sm:w-[100%] w-[16%]"
  

  
  ><Img
        src="images/img_clock_44x50.svg"
        className="h-[44px] w-[auto]"
        

        
        alt="clock Five"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Gastroenterology</Text></div><div
  className="flex flex-col gap-[9px] items-center justify-start sm:w-[100%] w-[7%]"
  

  
  ><Img
        src="images/img_clock_44x50.svg"
        className="h-[44px] w-[auto]"
        

        
        alt="clock One One"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Urology</Text></div><div
  className="flex flex-col gap-[9px] items-center justify-start sm:w-[100%] w-[12%]"
  

  
  ><Img
        src="images/img_clock_44x50.svg"
        className="h-[44px] w-[auto]"
        

        
        alt="clock Two One"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Dermatology</Text></div><div
  className="flex flex-col gap-[9px] items-center justify-start sm:w-[100%] w-[12%]"
  

  
  ><Img
        src="images/img_clock_44x50.svg"
        className="h-[44px] w-[auto]"
        

        
        alt="clock Three One"
      /><Text
    className="font-normal not-italic text-center text-gray_900 w-[auto]"
     variant="body2"

    
  >Gynaecology</Text></div></div></List></div></div></div></div><div
    className="font-worksans h-[573px] sm:h-[637px] md:h-[837px] mt-[64px] md:px-[20px] relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[573px] m-[auto] object-cover w-[100%]"
        

        
        alt="RectangleThirtyThree"
      /><div
  className="absolute bg-white_A700_a2 flex md:flex-col flex-row md:gap-[40px] gap-[94px] h-[100%] inset-[0] items-center justify-center m-[auto] p-[64px] sm:px-[20px] md:px-[40px] w-[100%]"
  
  
  ><div
  className="flex md:flex-1 flex-col gap-[13px] items-start justify-start md:ml-[0] ml-[123px] md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-yesevaone not-italic text-blue_500 text-left w-[auto]"
     as="h3" variant="h3"

    
  >Book an Appointment</Text><Text
    className="font-normal font-worksans leading-[140.00%] not-italic text-gray_900 text-left w-[100%]"
     variant="body2"

    
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</Text></div><div
  className="bg-blue_100 flex md:flex-1 items-center justify-start rounded-[5px] md:w-[100%] w-[40%]"
  

  
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

    
  >Submit</Text></div></div></div></div></div><div
  className="flex flex-col font-worksans items-center justify-start max-w-[992px] mt-[64px] mx-[auto] md:px-[20px] w-[100%]"
  

  
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
      550: { items: 1 },
        1050: { items: 1 },
      }}
      onSlideChanged={(e) => {
        setsliderState(e?.item);
      }}
      
      
      
      ref={sliderRef}
      className="mt-[64px] w-[100%]"
      items={[...Array(3)].map(()=><React.Fragment key={Math.random()}>
              <List
    className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mx-[10px]"
    
    orientation="horizontal"
    
  ><div
  className="flex flex-col items-start justify-start sm:ml-[0] w-[auto]"
  

  
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
        className="h-[24px] w-[24px]"
        

        
        alt="facebook One"
      /><Img
        src="images/img_camera_24x24.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="camera"
      /></div></div></div><Button
  className="cursor-pointer font-normal min-w-[317px] not-italic text-[16px] text-blue_100 text-center w-[auto]"
    
    shape="CustomBorderBL5"

variant="FillIndigo900"
  >View Profile</Button></div><div
  className="flex flex-col items-start justify-start sm:ml-[0] w-[auto]"
  

  
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
        src="images/img_linkedin.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="linkedin One"
      /><Img
        src="images/img_facebook_24x24.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="facebook Two"
      /><Img
        src="images/img_camera_24x24.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="camera One"
      /></div></div></div><Button
  className="cursor-pointer font-normal min-w-[317px] not-italic text-[16px] text-blue_100 text-center w-[auto]"
    
    shape="CustomBorderBL5"

variant="FillIndigo900"
  >View Profile</Button></div><div
  className="flex flex-col items-start justify-start sm:ml-[0] w-[auto]"
  

  
  ><Img
        src="defaultNoData.png"
        className="h-[350px] sm:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] md:w-[100%] w-[317px]"
        

        
        alt="RectangleTwenty Two"
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
        

        
        alt="linkedin Two"
      /><Img
        src="images/img_facebook_24x24.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="facebook Three"
      /><Img
        src="images/img_camera_24x24.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="camera Two"
      /></div></div></div><Button
  className="cursor-pointer font-normal min-w-[317px] not-italic text-[16px] text-blue_100 text-center w-[auto]"
    
    shape="CustomBorderBL5"

variant="FillIndigo900"
  >View Profile</Button></div></List>
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
  className="bg-gray_50 flex font-worksans items-center justify-end mt-[64px] p-[64px] sm:px-[20px] md:px-[40px] w-[100%]"
  

  
  ><div
  className="flex flex-col items-center justify-start max-w-[992px] mx-[auto] w-[100%]"
  

  
  ><div
  className="flex flex-col gap-[5px] items-center justify-start md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-bold font-worksans text-blue_500 text-center tracking-[2.88px] uppercase w-[auto]"
     variant="body1"

    
  >Better information, Better health</Text><Text
    className="font-yesevaone not-italic text-center text-indigo_900 w-[auto]"
     as="h3" variant="h3"

    
  >News</Text></div><Slider
      autoPlay autoPlayInterval={2000}
      
      
      
      activeIndex={sliderState1}
      responsive={{
        0: { items: 1 },
      550: { items: 2 },
        1050: { items: 4 },
      }}
      onSlideChanged={(e) => {
        setsliderState1(e?.item);
      }}
      
      
      
      ref={sliderRef1}
      className="mt-[64px] w-[100%]"
      items={[...Array(12)].map(()=><React.Fragment key={Math.random()}>
              <div
  className="bg-white_A700 flex sm:flex-col flex-row gap-[20px] items-center justify-start mx-[10px] sm:pr-[20px] pr-[32px] rounded-[5px] shadow-bs"
  
  
  ><Img
        src="defaultNoData.png"
        className="h-[154px] md:h-[auto] object-cover rounded-bl-[5px] rounded-br-[0] rounded-tl-[5px] rounded-tr-[0] sm:w-[100%] w-[36%]"
        

        
        alt="RectangleThirtyFour"
      /><div
  className="flex flex-col items-start justify-start sm:w-[100%] w-[61%]"
  

  
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

    
  >86</Text></div></div></div></div>
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
    activeIndex={sliderState1}
    inactiveCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue_100 w-[18px]"
    sliderRef={sliderRef1}
    selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
    unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
  /></div></div><div
  className="flex flex-col font-worksans md:gap-[40px] gap-[64px] items-center justify-start max-w-[992px] mt-[64px] mx-[auto] md:px-[20px] w-[100%]"
  

  
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
  className="bg-blue_100 flex h-[233px] items-center justify-center p-[22px] sm:px-[20px] rounded-[5px] w-[233px]"
  

  
  ><div
  className="flex flex-col gap-[19px] items-start justify-start mb-[32px] mt-[35px] md:w-[100%] w-[96%]"
  

  
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
  className="bg-blue_100 flex h-[233px] items-end justify-end p-[18px] rounded-[5px] w-[233px]"
  

  
  ><div
  className="flex flex-col gap-[19px] items-start justify-start mb-[32px] mt-[38px] md:w-[100%] w-[94%]"
  

  
  ><Img
        src="images/img_clock_30x30.svg"
        className="h-[30px] w-[30px]"
        

        
        alt="clock Six"
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

    
  >Sunday Emergency only</Text></div></div></div></div></div><Footer
  className="bg-indigo_900 flex font-worksans items-center justify-center mt-[64px] md:px-[20px] w-[100%]"
  
  
  /></div>
        
      </>);
    };

    

    export default Home1Page;
  