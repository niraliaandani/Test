
    import React from 'react';

    
    import {Text,Img,Button} from 'components'
  import Footer from 'components/Footer'
  import {useNavigate} from 'react-router-dom'
  
    

    

    const ServicesPage = () => {
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
    className="font-semibold text-blue_100 text-left w-[auto]"
     variant="body1"

    
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
    className="h-[250px] md:px-[20px] relative w-[100%]"
      

    
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
  className="flex flex-col items-start justify-start mb-[19px] md:ml-[0] ml-[108px] md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-normal font-worksans not-italic text-indigo_900 text-left w-[auto]"
     variant="body1"

    
  >Home / Services</Text><Text
    className="font-yesevaone not-italic text-indigo_900 text-left w-[auto]"
     as="h1" variant="h1"

    
  >Our Services</Text></div></div></div></div><div
  className="flex font-worksans items-center justify-start max-w-[991px] mt-[64px] mx-[auto] md:px-[20px] w-[100%]"
  

  
  ><div
  className="flex items-center justify-start w-[100%]"
  

  
  ><div
    className="gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]"
    
    
  ><div
  className="border-[1px] border-indigo_900_63 border-solid flex flex-1 flex-col gap-[57px] items-center justify-start pb-[32px] rounded-[5px] w-[100%]"
  

  
  ><div
    className="h-[300px] relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[300px] m-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]"
        

        
        alt="RectangleTwenty"
      /><div
  className="absolute bg-indigo_900_a2 flex h-[100%] inset-[0] items-center justify-center m-[auto] p-[125px] sm:px-[20px] md:px-[40px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]"
  

  
  ><Img
        src="images/img_dashboard.svg"
        className="h-[48px] w-[48px]"
        

        
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
        

        
        alt="arrowright"
      /></div></div></div><div
  className="border-[1px] border-indigo_900_63 border-solid flex flex-1 flex-col gap-[17px] items-center justify-start pb-[32px] rounded-[5px] w-[100%]"
  

  
  ><div
    className="flex flex-col relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[300px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]"
        

        
        alt="RectangleTwenty One"
      /><div
  className="bg-indigo_900 flex h-[80px] items-center justify-end ml-[auto] mr-[20px] mt-[-40px] p-[26px] sm:px-[20px] rounded-[50%] w-[80px] z-[1]"
  

  
  ><Img
        src="images/img_dashboard.svg"
        className="h-[26px] w-[26px]"
        

        
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
        

        
        alt="arrowright One"
      /></div></div></div><div
  className="border-[1px] border-indigo_900_63 border-solid flex flex-1 flex-col gap-[17px] items-center justify-start pb-[32px] rounded-[5px] w-[100%]"
  

  
  ><div
    className="flex flex-col relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[300px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]"
        

        
        alt="RectangleTwenty Two"
      /><div
  className="bg-indigo_900 flex h-[80px] items-center justify-end ml-[auto] mr-[20px] mt-[-40px] p-[26px] sm:px-[20px] rounded-[50%] w-[80px] z-[1]"
  

  
  ><Img
        src="images/img_dashboard.svg"
        className="h-[26px] w-[26px]"
        

        
        alt="dashboard Two"
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
      /></div></div></div><div
  className="border-[1px] border-indigo_900_63 border-solid flex flex-1 flex-col gap-[17px] items-center justify-start pb-[32px] rounded-[5px] w-[100%]"
  

  
  ><div
    className="flex flex-col relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[300px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]"
        

        
        alt="RectangleTwenty Three"
      /><div
  className="bg-indigo_900 flex h-[80px] items-center justify-end ml-[auto] mr-[20px] mt-[-40px] p-[26px] sm:px-[20px] rounded-[50%] w-[80px] z-[1]"
  

  
  ><Img
        src="images/img_dashboard.svg"
        className="h-[26px] w-[26px]"
        

        
        alt="dashboard Three"
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
        

        
        alt="arrowright Three"
      /></div></div></div><div
  className="border-[1px] border-indigo_900_63 border-solid flex flex-1 flex-col gap-[17px] items-center justify-start pb-[32px] rounded-[5px] w-[100%]"
  

  
  ><div
    className="flex flex-col relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[300px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]"
        

        
        alt="RectangleTwenty Four"
      /><div
  className="bg-indigo_900 flex h-[80px] items-center justify-end ml-[auto] mr-[20px] mt-[-40px] p-[26px] sm:px-[20px] rounded-[50%] w-[80px] z-[1]"
  

  
  ><Img
        src="images/img_dashboard.svg"
        className="h-[26px] w-[26px]"
        

        
        alt="dashboard Four"
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
        

        
        alt="arrowright Four"
      /></div></div></div><div
  className="border-[1px] border-indigo_900_63 border-solid flex flex-1 flex-col gap-[17px] items-center justify-start pb-[32px] rounded-[5px] w-[100%]"
  

  
  ><div
    className="flex flex-col relative w-[100%]"
      

    
  ><Img
        src="defaultNoData.png"
        className="h-[300px] mx-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]"
        

        
        alt="RectangleTwenty Five"
      /><div
  className="bg-indigo_900 flex h-[80px] items-center justify-end ml-[auto] mr-[20px] mt-[-40px] p-[26px] sm:px-[20px] rounded-[50%] w-[80px] z-[1]"
  

  
  ><Img
        src="images/img_dashboard.svg"
        className="h-[26px] w-[26px]"
        

        
        alt="dashboard Five"
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
        

        
        alt="arrowright Five"
      /></div></div></div></div></div></div><div
  className="flex flex-col font-worksans md:gap-[40px] gap-[64px] items-center justify-start max-w-[992px] mt-[128px] mx-[auto] md:px-[20px] w-[100%]"
  

  
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

    

    export default ServicesPage;
  