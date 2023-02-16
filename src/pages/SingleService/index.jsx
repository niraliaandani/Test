
    import React from 'react';

    
    import {Text,Img,Button,List,Slider,PagerIndicator} from 'components'
  import Footer from 'components/Footer'
  import {useNavigate} from 'react-router-dom'
  
    

    

    const SingleServicePage = () => {
      const navigate = useNavigate();
  
      function handleNavigate() {window.location.href = "https://www.facebook.com/login/"}
  function handleNavigate1() {window.location.href = "https://www.facebook.com/login/"}
  function handleNavigate2() {window.location.href = "https://www.facebook.com/login/"}
  
      const sliderRef = React.useRef(null)
  const [sliderState, setsliderState] = React.useState(0)
  
      return (<>
        <div
  className="bg-white_A700 flex items-center justify-start mx-[auto] w-[100%]"
  

  
  ><div
  className="flex flex-col items-center justify-start w-[100%]"
  

  
  ><header
    className="bg-white_A700 flex md:flex-col flex-row font-yesevaone md:gap-[20px] items-center justify-center md:px-[20px] w-[100%]"
    
    
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
    className="common-pointer font-semibold text-blue_100 text-left w-[auto]"
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
  className="flex flex-col items-start justify-start mb-[15px] md:ml-[0] ml-[108px] md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-normal font-worksans not-italic text-indigo_900 text-left w-[auto]"
     variant="body1"

    
  >Home / Services</Text><Text
    className="font-yesevaone not-italic text-indigo_900 text-left w-[auto]"
     as="h1" variant="h1"

    
  >Free Checkup</Text></div></div></div></div><div
  className="flex md:flex-col flex-row font-worksans gap-[21px] items-start justify-center max-w-[992px] mt-[60px] mx-[auto] md:px-[20px] w-[100%]"
  
  
  ><div
  className="bg-white_A700_6c border-[1px] border-indigo_900_6c border-solid flex md:flex-1 flex-col gap-[24px] justify-start pb-[24px] rounded-[5px] md:w-[100%] w-[25%]"
  

  
  ><div
  className="bg-indigo_900 flex items-start justify-start p-[24px] sm:px-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[5px] rounded-tr-[5px] w-[100%]"
  

  
  ><div
  className="flex flex-row gap-[8px] items-center justify-start md:ml-[0] ml-[8px] md:w-[100%] w-[78%]"
  
  
  ><Img
        src="images/img_dashboard_26x26.svg"
        className="h-[32px] w-[32px]"
        

        
        alt="dashboard"
      /><Text
    className="font-normal not-italic text-blue_100 text-center w-[auto]"
     variant="body2"

    
  >Free Checkup</Text></div></div><div
  className="flex flex-col gap-[48px] items-start justify-start md:ml-[0] ml-[32px] md:w-[100%] w-[55%]"
  

  
  ><div
  className="flex flex-row gap-[8px] items-end justify-start w-[100%]"
  
  
  ><Img
        src="images/img_location_28x32.svg"
        className="h-[28px] w-[auto]"
        

        
        alt="location Two"
      /><Text
    className="font-normal my-[4px] not-italic text-gray_900 text-left w-[auto]"
     variant="body2"

    
  >Cardiogram</Text></div><div
  className="flex flex-row gap-[8px] items-center justify-start w-[100%]"
  
  
  ><Img
        src="images/img_facebook.svg"
        className="common-pointer h-[32px] w-[32px]"
        onClick={handleNavigate}

        
        alt="facebook"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body2"

    
  >Dna Testing</Text></div><div
  className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[99%]"
  
  
  ><Img
        src="images/img_question.svg"
        className="h-[40px] w-[auto]"
        

        
        alt="question"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body2"

    
  >Blood Bank</Text></div><div
  className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[95%]"
  
  
  ><Img
        src="images/img_facebook.svg"
        className="common-pointer h-[32px] w-[32px]"
        onClick={handleNavigate1}

        
        alt="facebook One"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body2"

    
  >Dermalogy</Text></div><div
  className="flex flex-row gap-[8px] items-center justify-start md:w-[100%] w-[98%]"
  
  
  ><Img
        src="images/img_facebook.svg"
        className="common-pointer h-[32px] w-[32px]"
        onClick={handleNavigate2}

        
        alt="facebook Two"
      /><Text
    className="font-normal not-italic text-gray_900 text-left w-[auto]"
     variant="body2"

    
  >Orthopedic</Text></div></div></div><Img
        src="images/img_rectangle13.webp"
        className="md:flex-1 h-[454px] sm:h-[auto] object-cover md:w-[100%] w-[74%]"
        

        
        alt="RectangleThirteen"
      /></div><Text
    className="font-yesevaone mt-[2px] not-italic text-indigo_900 text-left w-[auto]"
     as="h3" variant="h3"

    
  >A passion for putting patients first</Text><List
    className="sm:flex-col flex-row font-worksans gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 mt-[23px] md:px-[20px] w-[49%]"
    
    orientation="horizontal"
    
  ><div
  className="flex flex-col gap-[17px] items-start justify-start w-[100%]"
  

  
  ><div
  className="flex flex-row gap-[10px] items-start justify-start w-[100%]"
  
  
  ><div
    className="bg-blue_500 h-[16px] mb-[5px] rounded-[50%] w-[16px]"
    
    
  ></div><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body1"

    
  >A Passion for Healing</Text></div><div
  className="flex flex-row gap-[10px] items-start justify-start md:w-[100%] w-[61%]"
  
  
  ><div
    className="bg-blue_500 h-[16px] my-[2px] rounded-[50%] w-[16px]"
    
    
  ></div><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body1"

    
  >All our best</Text></div></div><div
  className="flex flex-col gap-[18px] items-start justify-start w-[100%]"
  

  
  ><div
  className="flex flex-row gap-[10px] items-start justify-start md:w-[100%] w-[92%]"
  
  
  ><div
    className="bg-blue_500 h-[16px] mb-[4px] rounded-[50%] w-[16px]"
    
    
  ></div><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body1"

    
  >5-Star Care</Text></div><div
  className="flex flex-row gap-[10px] items-start justify-start w-[100%]"
  
  
  ><div
    className="bg-blue_500 h-[16px] my-[2px] rounded-[50%] w-[16px]"
    
    
  ></div><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body1"

    
  >Believe in Us</Text></div></div><div
  className="flex flex-col gap-[19px] items-start justify-start w-[100%]"
  

  
  ><div
  className="flex flex-row gap-[10px] items-start justify-start w-[100%]"
  
  
  ><div
    className="bg-blue_500 h-[16px] mb-[5px] rounded-[50%] w-[16px]"
    
    
  ></div><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body1"

    
  >A Legacy of Excellence</Text></div><div
  className="flex flex-row gap-[10px] items-start justify-start md:w-[100%] w-[66%]"
  
  
  ><div
    className="bg-blue_500 h-[16px] mb-[5px] rounded-[50%] w-[16px]"
    
    
  ></div><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body1"

    
  >Always Caring</Text></div></div></List><Text
    className="font-normal font-worksans leading-[140.00%] mt-[23px] not-italic text-black_900 text-left sm:w-[100%] w-[54%]"
     variant="body2"

    
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</Text><Text
    className="font-normal font-worksans leading-[140.00%] mt-[8px] not-italic text-black_900 text-left sm:w-[100%] w-[54%]"
     variant="body2"

    
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</Text><div
  className="flex flex-col font-worksans items-center justify-start max-w-[992px] mt-[128px] mx-[auto] md:px-[20px] w-[100%]"
  

  
  ><div
  className="flex flex-col gap-[6px] items-center justify-start md:w-[100%] w-[auto]"
  

  
  ><Text
    className="font-bold font-worksans text-blue_500 text-center tracking-[2.88px] uppercase w-[auto]"
     variant="body1"

    
  >Meet The</Text><Text
    className="font-yesevaone not-italic text-center text-indigo_900 w-[auto]"
     as="h3" variant="h3"

    
  >Team Members</Text></div><Slider
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
        src="images/img_linkedin_24x24.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="linkedin"
      /><Img
        src="images/img_facebook_2.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="facebook Three"
      /><Img
        src="images/img_camera_1.svg"
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
        src="images/img_linkedin_24x24.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="linkedin One"
      /><Img
        src="images/img_facebook_2.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="facebook Four"
      /><Img
        src="images/img_camera_1.svg"
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
        src="images/img_linkedin_24x24.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="linkedin Two"
      /><Img
        src="images/img_facebook_2.svg"
        className="h-[24px] w-[24px]"
        

        
        alt="facebook Five"
      /><Img
        src="images/img_camera_1.svg"
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
        

        
        alt="location Three"
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
  
  
  /></div></div>
        
      </>);
    };

    

    export default SingleServicePage;
  