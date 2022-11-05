import { Container, Button, Box, Flex, Card, Image } from "theme-ui";
import MallOfEmirates from "assets/download.jpg";
import Palm from "assets/download.jpg";
import Airport from "assets/download.jpg";
import img2 from "assets/download.jpg";
import img3 from "assets/download.jpg";
import img4 from "assets/download.jpg";
import img5 from "assets/download.jpg";
import img6 from "assets/download.jpg";
import img7 from "assets/download.jpg";
import img8 from "assets/download.jpg";
 

export default function BucketCard() {
  const data = [
    {
      id: 1,
      imgSrc: MallOfEmirates,
      altText: "DWTC",
    },
    {
      id: 2,
      imgSrc: Palm,
      altText: "Dxb Airport Concorde",
    },
    {
      id: 3,
      imgSrc: Airport,
      altText: "Maui Restaurant",
    },
    {
      id: 4,
      imgSrc: img2,
      altText: "Nail-paint bar",
    }, {
      id: 5,
      imgSrc: img3,
      altText: "Office in Business Bay",
    }, {
      id: 6,
      imgSrc: img4,
      altText: "Decisive",
    }, {
      id: 7,
      imgSrc: img5,
      altText: "Office",
    }, {
      id: 8,
      imgSrc: img8,
      altText: "Dubai Airport",
    }, {
      id: 9,
      imgSrc: img7,
      altText: "Dubai Airport",
    },
  ];

  return (
    <section style={styles.coreFeature}>
    
       <h1 style={{ color: "#596AFF", textAlign:"center", fontSize:"50px"}}>Your Search</h1>

      <Flex style={styles.flex}>
        
        <Card data-aos="zoom-out" sx={styles.specialCard}>
          <Image src={data[0].imgSrc} style={styles.specialCardImage} />
          <Box>
            <h3 style={styles.cardHeading}>{data[0].altText}</h3>
          </Box>
        </Card>
        <Card data-aos="zoom-out" sx={{ ...styles.specialCard }}>
          <Image src={data[1].imgSrc} style={styles.specialCardImage} />
          <Box>
            <h3 style={styles.cardHeading}>{data[1].altText}</h3>
          </Box>
        </Card>
        <Card data-aos="zoom-out" sx={styles.specialCard}>
          <Image src={data[2].imgSrc} style={styles.specialCardImage} />
          <Box>
            <h3 style={styles.cardHeading}>{data[2].altText}</h3>
          </Box>
        </Card>
        </Flex>
        <Flex style={styles.flex}>
        <Card data-aos="zoom-out" sx={{ ...styles.specialCard}}>
          <Image src={data[3].imgSrc} style={styles.specialCardImage} />
          <Box>
            <h3 style={styles.cardHeading}>{data[1].altText}</h3>
          </Box>
        </Card>
        <Card data-aos="zoom-out" sx={{ ...styles.specialCard}}>
          <Image src={data[4].imgSrc} style={styles.specialCardImage} />
          <Box>
            <h3 style={styles.cardHeading}>{data[1].altText}</h3>
          </Box>
        </Card>
        <Card data-aos="zoom-out" sx={{ ...styles.specialCard}}>
          <Image src={data[5].imgSrc} style={styles.specialCardImage} />
          <Box>
            <h3 style={styles.cardHeading}>{data[1].altText}</h3>
          </Box>
        </Card>
        </Flex>
        <Flex style={styles.flex}>
        <Card data-aos="zoom-out" sx={{ ...styles.specialCard}}>
          <Image src={data[6].imgSrc} style={styles.specialCardImage} />
          <Box>
            <h3 style={styles.cardHeading}>{data[1].altText}</h3>
          </Box>
        </Card>
        <Card data-aos="zoom-out" sx={{ ...styles.specialCard}}>
          <Image src={data[7].imgSrc} style={styles.specialCardImage} />
          <Box>
            <h3 style={styles.cardHeading}>{data[1].altText}</h3>
          </Box>
        </Card>
        <Card data-aos="zoom-out" sx={{ ...styles.specialCard}}>
          <Image src={data[8].imgSrc} style={styles.specialCardImage} />
          <Box>
            <h3 style={styles.cardHeading}>{data[1].altText}</h3>
          </Box>
        </Card>
        </Flex>
       
      
       
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: "relative",
    backgroundColor: "white",
    padding: "60px 0",
    margin: "0 0 40px 0",
    paddingTop:"100px",
    "&::before": {
      position: "absolute",
      content: '""',
      top: ["auto", null, null, "50%"],
      bottom: ["100px", 0, null, "auto"],
      left: 0,
      background: "linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)",
      height: [350, 550, "60%"],
      width: "50%",
      zIndex: -1,
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
      transform: ["translateY(0)", null, null, "translateY(-50%)"],
    },
  },
  mainheading: {
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: ["column", null, null, "row"],
  },
   
  thumbnail: {
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ["100%", 450, 550, 350, 500, 570],
    pr: [0, null, "auto", null, null, 80],
    pl: "auto",
    flexShrink: 0,
  },
  flex: {
    // flexWrap: "nowrap",
    margin: "40px 0px",
    justifyContent:"space-around",
    padding: "28px",
    flexWrap: "wrap",
    "&::WebkitScrollbar": {
      background: "transparent",
    }
  },
  specialCard: {
    backgroundColor: "grey",
    flex:  "0 0 auto",
    textAlign: "center",
    alignItems: "center",
    margin: "10px",
    width: "380px",
    display: "inline-block",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "all 0.3s ease-in-out",
    },
    "@media screen and (max-width: 768px)": {
      width: "250px",
    }
  },

  specialCardImage: {
    width: "30%",
    position:"relative",
    left:"-81px",
    transform: "translateY(-10%)",
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
  },
  headingTop: {
    pl: [0, null, null, null, "35px", null, "55px", 6],
    mb: [3, null, null, null, 1],
    textAlign: ["center", null, null, "left"],
  },
  grid: {
    p: ["0 0px 35px", null, null, null, "0 20px 40px", null, "0 40px 40px", 0],
  },
  image: {
    borderRadius: "16px 16px 0 0",
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",

    p: [
      "0 17px 20px",
      null,
      null,
      "0 0 20px",
      "20px 15px 17px",
      null,
      null,
      "25px 30px 23px",
    ],
    backgroundColor: "white",
    borderRadius: "10px",
    transition: "all 0.3s",
    width: ["100%", "85%", null, "100%"],
    mx: "auto",
    "&:hover": {
      boxShadow: [
        "0px 0px 0px rgba(0, 0, 0, 0)",
        null,
        null,
        null,
        "0px 8px 24px rgba(69, 88, 157, 0.07)",
      ],
    },
  },
  cardText: {
    textAlign: "center",
    padding: "10px",
    backgroundColor: "white",
    width: "100%",
    textAlign: "center",
    borderRadius: "0 0px 4px 4px",
    fontSize: "18px",
    color: "white",
    fontWeight: "bold",
  },
  img: {
    width: ["50px", null, "55px"],
    height: "auto",
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
