
    import React from 'react';

    
    import {Text,Img,Button,Slider,PagerIndicator} from 'components'
  import Footer from 'components/Footer'
  import {useNavigate} from 'react-router-dom'
  
    

    

    const ContactPage = () => {
      const navigate = useNavigate();
  
      
      const sliderRef = React.useRef(null)
  const [sliderState, setsliderState] = React.useState(0)
  
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
    className="font-semibold text-blue_100 text-left w-[auto]"
     variant="body1"

    
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

    
  >Home / Contact</Text><Text
    className="font-yesevaone not-italic text-indigo_900 text-left w-[auto]"
     as="h1" variant="h1"

    
  >Our Contacts</Text></div></div></div></div><div
  className="flex items-center justify-start max-w-[992px] mt-[64px] mx-[auto] md:px-[20px] w-[100%]"
  

  
  ><Img
        src="defaultNoData.png"
        className="h-[450px] md:h-[auto] object-cover rounded-[5px] w-[100%]"
        

        
        alt="Map"
      /></div><div
  className="flex font-worksans items-center justify-start max-w-[992px] mt-[64px] mx-[auto] md:px-[20px] w-[100%]"
  

  
  ><div
  className="flex md:flex-col flex-row gap-[20px] items-center justify-between w-[100%]"
  
  
  ><div
  className="flex md:flex-1 flex-col gap-[32px] items-start justify-start md:w-[100%] w-[486px]"
  

  
  ><div
  className="flex flex-col gap-[6px] items-start justify-start md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-bold font-worksans text-blue_500 text-left tracking-[2.88px] uppercase w-[auto]"
     variant="body1"

    
  >Get in touch</Text><Text
    className="font-yesevaone not-italic text-center text-indigo_900 w-[auto]"
     as="h3" variant="h3"

    
  >Contact</Text></div><div
  className="bg-blue_100 flex items-center justify-start rounded-[5px] w-[100%]"
  

  
  ><div
  className="flex flex-col items-center justify-start w-[100%]"
  

  
  ><div
  className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-evenly w-[100%]"
  
  
  ><Text
    className="bg-indigo_900 font-normal h-[50px] not-italic pl-[20px] sm:pr-[20px] pr-[35px] py-[15px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[0] text-left text-white_A700 w-[243px]"
     variant="body2"

    
  >Name</Text><Text
    className="bg-indigo_900 font-normal h-[50px] not-italic pl-[20px] sm:pr-[20px] pr-[35px] py-[15px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[5px] text-left text-white_A700 w-[242px]"
     variant="body2"

    
  >Email</Text></div><Text
    className="bg-indigo_900 font-normal h-[50px] not-italic pb-[13px] pl-[20px] sm:pr-[20px] pr-[35px] pt-[17px] text-left text-white_A700 w-[486px]"
     variant="body2"

    
  >Subject</Text><div
  className="bg-indigo_900 flex items-start justify-start p-[17px] w-[100%]"
  

  
  ><Text
    className="font-normal mb-[180px] md:ml-[0] ml-[2px] not-italic text-left text-white_A700 w-[auto]"
     variant="body2"

    
  >Message</Text></div><div
  className="bg-blue_100 flex items-center justify-start p-[15px] rounded-bl-[5px] rounded-br-[5px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
  

  
  ><Text
    className="font-medium text-center text-indigo_900 uppercase w-[auto]"
     variant="body2"

    
  >Submit</Text></div></div></div></div><div
  className="flex sm:flex-1 h-[486px] sm:h-[auto] items-center justify-start sm:w-[100%] w-[486px]"
  

  
  ><div
  className="flex h-[486px] sm:h-[auto] items-center justify-start sm:w-[100%] w-[486px]"
  

  
  ><div
    className="gap-[20px] grid sm:grid-cols-1 grid-cols-2 h-[486px] justify-center min-h-[auto] w-[486px]"
    
    
  ><div
  className="bg-blue_100 flex h-[233px] items-start justify-start p-[26px] sm:px-[20px] rounded-[5px] w-[100%]"
  

  
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
  className="bg-indigo_900 flex h-[233px] items-start justify-start p-[30px] sm:px-[20px] rounded-[5px] w-[100%]"
  

  
  ><div
  className="flex flex-col gap-[16px] items-start justify-start mb-[20px] mt-[23px] md:w-[100%] w-[89%]"
  

  
  ><Img
        src="images/img_videocamera.svg"
        className="h-[36px] w-[auto]"
        

        
        alt="videocamera"
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
  className="bg-blue_100 flex h-[233px] items-center justify-center p-[22px] sm:px-[20px] rounded-[5px] w-[100%]"
  

  
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
  className="bg-blue_100 flex h-[233px] items-end justify-end p-[18px] rounded-[5px] w-[100%]"
  

  
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

    
  >Sunday Emergency only</Text></div></div></div></div></div></div></div></div><div
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
      
      
      
      activeIndex={sliderState}
      responsive={{
        0: { items: 1 },
      550: { items: 2 },
        1050: { items: 4 },
      }}
      onSlideChanged={(e) => {
        setsliderState(e?.item);
      }}
      
      
      
      ref={sliderRef}
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
        src="images/img_favorite_14x16.svg"
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
    activeIndex={sliderState}
    inactiveCss="inline-block cursor-pointer rounded-[50%] h-[18px] bg-blue_100 w-[18px]"
    sliderRef={sliderRef}
    selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
    unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
  /></div></div><Footer
  className="bg-indigo_900 flex font-worksans items-center justify-center md:px-[20px] w-[100%]"
  
  
  /></div>
        
      </>);
    };

    

    export default ContactPage;
  