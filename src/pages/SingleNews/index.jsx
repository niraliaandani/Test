
    import React from 'react';

    
    import {Text,Img,Button,Input,List} from 'components'
  import {CloseSVG} from '../../assets/images'
  import Footer from 'components/Footer'
  import {useNavigate} from 'react-router-dom'
  
    

    

    const SingleNewsPage = () => {
      const navigate = useNavigate();
  
      
      const [inputvalue,setInputvalue] = React.useState("")
  
      return (<>
        <div
  className="bg-white_A700 flex font-yesevaone items-center justify-start mx-[auto] w-[100%]"
  

  
  ><div
  className="flex flex-col items-start justify-start w-[100%]"
  

  
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
    className="common-pointer font-semibold text-blue_100 text-left w-[auto]"
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
  className="bg-cover bg-no-repeat flex h-[250px] items-start justify-end p-[76px] sm:px-[20px] md:px-[40px] w-[100%]"
  style={{"backgroundImage":"url('images/img_group203.svg')"}}

  
  ><div
  className="flex flex-col items-start justify-start md:ml-[0] ml-[109px] md:w-[100%] w-[72%]"
  

  
  ><Text
    className="font-normal font-worksans not-italic text-indigo_900 text-left w-[auto]"
     variant="body1"

    
  >Home / News / Health Care</Text><Text
    className="font-yesevaone not-italic text-indigo_900 text-left w-[auto]"
     as="h1" variant="h1"

    
  >A passion for putting patients first.</Text><div
  className="flex sm:flex-col flex-row font-worksans sm:gap-[20px] items-start justify-start md:w-[100%] w-[59%]"
  
  
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
  className="flex flex-row gap-[8px] items-start justify-center sm:ml-[0] ml-[24px] sm:w-[100%] w-[20%]"
  
  
  ><Img
        src="images/img_user_18x16.svg"
        className="h-[18px] w-[auto]"
        

        
        alt="user"
      /><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body2"

    
  >By Author</Text></div><div
  className="flex flex-row gap-[8px] items-start justify-center sm:ml-[0] ml-[24px] sm:w-[100%] w-[9%]"
  
  
  ><Img
        src="images/img_instagram.svg"
        className="h-[10px] mt-[4px] w-[auto]"
        

        
        alt="instagram"
      /><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body2"

    
  >68</Text></div><div
  className="flex flex-row gap-[8px] items-center justify-between sm:ml-[0] ml-[24px] sm:w-[100%] w-[9%]"
  
  
  ><Img
        src="images/img_favorite_14x16.svg"
        className="h-[14px] w-[auto]"
        

        
        alt="favorite"
      /><Text
    className="font-normal not-italic text-black_900 text-left w-[auto]"
     variant="body2"

    
  >86</Text></div></div></div></div></div></div><div
  className="flex md:flex-col flex-row font-worksans gap-[20px] items-start justify-center max-w-[992px] mt-[64px] mx-[auto] md:px-[20px] w-[100%]"
  
  
  ><div
  className="flex md:flex-1 flex-col gap-[32px] items-center justify-start md:w-[100%] w-[67%]"
  

  
  ><Img
        src="defaultNoData.png"
        className="h-[400px] md:h-[auto] object-cover w-[100%]"
        

        
        alt="RectangleThirteen"
      /><Text
    className="font-normal leading-[140.00%] not-italic text-gray_900 text-left w-[100%]"
     variant="body1"

    
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</Text></div><div
  className="flex md:flex-1 flex-col gap-[24px] items-center justify-start md:w-[100%] w-[32%]"
  

  
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
  className="bg-white_A700_6c border-[1px] border-indigo_900_6c border-solid flex flex-row font-worksans items-center justify-between p-[12px] rounded-[5px] w-[100%]"
  
  
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

    
  >10</Text></div></div></div></div><div
  className="flex flex-row font-worksans sm:gap-[40px] items-center justify-between md:ml-[0] ml-[187px] mt-[64px] md:px-[20px] md:w-[100%] w-[49%]"
  
  
  ><Button
  className="flex items-center justify-center min-w-[193px] text-center w-[auto]"
    
    leftIcon={<div className="h-[10px] mr-[8px] w-[10px] outline-indigo_900 outline-[1px] outline text-center"><Img
        src="images/img_arrowleft.svg"
        className="text-center"
        

        
        alt="arrow_left"
      /></div>}


  ><div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-indigo_900 text-left">Previous Article</div></Button><Button
  className="flex items-center justify-center text-center"
    
    rightIcon={<div className="h-[10px] ml-[8px] w-[10px] outline-indigo_900 outline-[1px] outline text-center"><Img
        src="images/img_arrowright.svg"
        className="text-center"
        

        
        alt="arrow_right"
      /></div>}


  ><div className="bg-transparent cursor-pointer font-medium leading-[normal] text-[16px] text-indigo_900 text-left">Next Article</div></Button></div><div
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
  
  
  /></div></div>
        
      </>);
    };

    

    export default SingleNewsPage;
  