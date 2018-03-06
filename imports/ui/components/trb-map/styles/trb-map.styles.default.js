
export default TrbMap_Styles_Default = {
   container : {
	   width: "100%",
	   height: "100%",
	   maxWidth : "1280px",
	   margin : "auto",
    // border : "1px solid blue"
	   //paddingTop : "50px",
	   //display:"flex",
	   //flexWrap : "wrap",
	   //justifyContent : "space-between",
	   //border : "1px solid red",
	},
	header : {
	   width : "100%",
	   minWidth : "900px",
	   //marginBottom : "40px",
	   //border : "1px solid blue"
   },
   content : {
	   width : "100%",
	    height: "100%",
	   margin : "auto",
       display : "flex",
     flexDirection : "column"
   },
   mapBox : {
	   width : "100%",
	   //height : "100%",
       flex : 1,
      overflow : "hidden",
	  // height : screenHeight-200,
	   margin : "0px auto 0px auto",
	   padding : "0px",
	   //backgroundColor : theme.colors.component,
	   //border : "1px solid red",

   },
   rightDrawer : 400,
   eventDetails : {
	   //marginTop : "20px",
	   width : "80%",
	   height : "500px",
	   margin : "0px auto 20px auto",
	   padding : "20px",
	   //backgroundColor : theme.colors.component,
	   //border : "1px solid green",
   },
   sendEmailBox : {
	   height:"100%", 
	   width:"100%", 
	   position:"fixed", 
	   top:0, 
	   left : 0
   },
	clientsDetails :  {
		   container : {
			   padding : "20px",
			   
			},
		   infosBox : {
			   title : {
				   fontSize : "1.2em",
				   fontWeight : "bold",
				   width : "100%",
				   textAlign : "center"
			   }
		   },
		   actionsBox : {
			   
		   },
		   dataBox : {
			   
		   }
	   },
    toolBar :  {
        paddingBottom : "5px",
        paddingTop : "5px",
       // border : "1px solid blue"
    },
    closeBox : {
        display : "flex",
        justifyContent : "space-between",
        fontSize : "1.5em",
        fontWeight : "bold",
        padding : "5px",
        cursor : "pointer",
        borderBottom : "1px solid grey"
    },
}
