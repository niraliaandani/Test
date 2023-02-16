
    import React from 'react';

    
    import {Text,Img,Button,SelectBox,TextArea,Line} from 'components'
  import {Accordion,AccordionItem,AccordionItemPanel,AccordionItemState,AccordionItemHeading,AccordionItemButton} from 'react-accessible-accordion'
  import Footer from 'components/Footer'
  import {useNavigate} from 'react-router-dom'
  
    

    

    const AppointmentPage = () => {
      const navigate = useNavigate();
  
      
      
      return (<>
        <div
  className="bg-white_A700 flex flex-col font-yesevaone items-center justify-start mx-[auto] w-[100%]"
  

  
  ><header
    className="bg-white_A700 flex md:flex-col flex-row md:gap-[20px] items-center justify-center md:px-[20px] w-[100%]"
    
    
  ><Text
    className="common-pointer md:ml-[0] ml-[187px] md:mt-[0] my-[18px] not-italic text-indigo_900 text-left uppercase w-[auto]"
     as="h2" variant="h2"onClick={() => navigate('/')}

    
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
    className="common-pointer font-normal not-italic text-left text-white_A700 w-[auto]"
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
  className="cursor-pointer font-medium leading-[normal] min-w-[173px] text-[16px] text-center text-indigo_900 w-[auto]"
    
    


  >Appointment</Button></div></div><div
    className="h-[250px] md:px-[20px] relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[250px] m-[auto] object-cover w-[100%]"
        

        
        alt="RectangleThree"
      /><div
  className="absolute bg-white_A700_7f flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]"
  

  
  ><div
  className="bg-cover bg-no-repeat flex h-[250px] items-start justify-start p-[79px] sm:px-[20px] md:px-[40px] w-[100%]"
  style={{"backgroundImage":"url('images/img_group203.svg')"}}

  
  ><div
  className="flex flex-col items-start justify-start mb-[13px] md:ml-[0] ml-[107px] md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-normal font-worksans not-italic text-indigo_900 text-left w-[auto]"
     variant="body1"

    
  >Home / Appointment</Text><Text
    className="font-yesevaone not-italic text-indigo_900 text-left w-[auto]"
     as="h1" variant="h1"

    
  >Book an Appointment</Text></div></div></div></div><div
  className="flex font-worksans items-center justify-start max-w-[992px] mt-[64px] mx-[auto] md:px-[20px] w-[100%]"
  

  
  ><div
  className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]"
  
  
  ><div
  className="flex md:flex-1 flex-col md:gap-[40px] gap-[64px] items-center justify-start md:w-[100%] w-[50%]"
  

  
  ><div
  className="flex flex-col gap-[13px] items-start justify-start w-[100%]"
  

  
  ><Text
    className="font-yesevaone not-italic text-indigo_900 text-left w-[auto]"
     as="h3" variant="h3"

    
  >Book an Appointment</Text><Text
    className="font-normal font-worksans leading-[140.00%] not-italic text-gray_900 text-left w-[100%]"
     variant="body2"

    
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</Text></div><div
  className="bg-blue_100 flex items-center justify-start rounded-[5px] w-[100%]"
  

  
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

    
  >Submit</Text></div></div></div></div><div
  className="bg-indigo_900 flex md:flex-1 flex-col font-yesevaone items-center justify-end p-[44px] sm:px-[20px] md:px-[40px] rounded-[5px] md:w-[100%] w-[49%]"
  

  
  ><Text
    className="mt-[2px] not-italic text-blue_100 text-left w-[auto]"
     as="h1" variant="h1"

    
  >Shedule hours</Text><div
  className="flex flex-col font-worksans items-start justify-start mt-[54px] md:w-[100%] w-[97%]"
  

  
  ><div
  className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]"
  
  
  ><Text
    className="font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body1"

    
  >Monday</Text><div
    className="bg-blue_100 h-[2px] sm:ml-[0] ml-[77px] sm:mt-[0] my-[9px] w-[5%]"
    
    
  ></div><Text
    className="font-normal sm:ml-[0] ml-[51px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >09:00 AM - 07:00 PM</Text></div><div
  className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[27px] w-[100%]"
  
  
  ><Text
    className="font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body1"

    
  >Tuesday</Text><div
    className="bg-blue_100 h-[2px] sm:ml-[0] ml-[74px] sm:mt-[0] my-[9px] w-[5%]"
    
    
  ></div><Text
    className="font-normal sm:ml-[0] ml-[51px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >09:00 AM - 07:00 PM</Text></div><div
  className="flex flex-row items-start justify-between mt-[27px] w-[100%]"
  
  
  ><Text
    className="font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body1"

    
  >Wednesday</Text><div
    className="bg-blue_100 h-[2px] my-[9px] w-[5%]"
    
    
  ></div><Text
    className="font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >09:00 AM - 07:00 PM</Text></div><div
  className="flex flex-row items-start justify-between mt-[27px] w-[100%]"
  
  
  ><Text
    className="font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body1"

    
  >Thursday</Text><div
    className="bg-blue_100 h-[2px] my-[9px] w-[5%]"
    
    
  ></div><Text
    className="font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >09:00 AM - 07:00 PM</Text></div><div
  className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start mt-[27px] w-[100%]"
  
  
  ><Text
    className="font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body1"

    
  >Friday</Text><div
    className="bg-blue_100 h-[2px] sm:ml-[0] ml-[92px] sm:mt-[0] my-[9px] w-[5%]"
    
    
  ></div><Text
    className="font-normal sm:ml-[0] ml-[51px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >09:00 AM - 07:00 PM</Text></div><div
  className="flex flex-row items-start justify-between mt-[27px] w-[100%]"
  
  
  ><Text
    className="font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body1"

    
  >Saturday</Text><div
    className="bg-blue_100 h-[2px] my-[9px] w-[5%]"
    
    
  ></div><Text
    className="font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >09:00 AM - 07:00 PM</Text></div><div
  className="flex flex-row items-start justify-start mt-[27px] md:w-[100%] w-[71%]"
  
  
  ><Text
    className="font-normal not-italic text-left text-white_A700 w-[auto]"
     variant="body1"

    
  >Sunday</Text><div
    className="bg-blue_100 h-[2px] ml-[81px] my-[10px] w-[8%]"
    
    
  ></div><Text
    className="font-normal ml-[51px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >Closed</Text></div></div><Line
    className="bg-blue_100 h-[2px] mt-[31px] w-[85%]"
    
    
  /><div
  className="flex flex-row font-worksans gap-[8px] items-center justify-center mt-[32px] md:w-[100%] w-[73%]"
  
  
  ><Img
        src="images/img_globe.svg"
        className="h-[47px] w-[auto]"
        

        
        alt="globe"
      /><div
    className="h-[59px] relative w-[80%]"
      

    
  ><Text
    className="mb-[-0.01px] text-left text-white_A700 w-[auto] z-[1]"
     as="h5" variant="h5"

    
  >Emergency</Text><Text
    className="mt-[auto] mx-[auto] text-blue_100 text-left w-[auto]"
     as="h5" variant="h5"

    
  >(237) 681-812-255</Text></div></div></div></div></div><div
  className="flex items-center justify-start max-w-[992px] mt-[64px] mx-[auto] md:px-[20px] w-[100%]"
  

  
  ><Img
        src="defaultNoData.png"
        className="h-[450px] md:h-[auto] object-cover rounded-[5px] w-[100%]"
        

        
        alt="Map"
      /></div><div
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

    
  >Sunday Emergency only</Text></div></div></div></div></div><Footer
  className="bg-indigo_900 flex font-worksans items-center justify-center mt-[64px] md:px-[20px] w-[100%]"
  
  
  /></div>
        
      </>);
    };

    

    export default AppointmentPage;
  