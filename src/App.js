import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App(props)  {
  let district=[
    {
      id:"1",
      name:"kasaragod",
      dicription:"City paradise",
      Image:"https://upload.wikimedia.org/wikipedia/commons/5/5e/Bakel_Fort_Beach_Kasaragod4.jpg"
    },
    {
      id:"2",
      name:"kannur",
      dicription:"Red Salute",
      Image:"https://cdn.britannica.com/85/142585-050-371092F1/Kannur-Kerala-India.jpg"
    },
    {
      id:"3",
      name:"kozhikode",
      dicription:"kerala hub",
      Image:"https://images.indianexpress.com/2021/07/DSC_0031.jpg"
    },
    {
      id:"4",
      name:"Wayanad",
      dicription:"Naturality peak",
      Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Blue%2C_Green_%26_White.jpg/1200px-Blue%2C_Green_%26_White.jpg"
    },
    {
      id:"5",
      name:"Malappuram",
      dicription:"Historical arena",
      Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQzMNm185naVPgGT-FviH2PnwJ-DrUfgFsA&usqp=CAU"
    },
    {
      id:"6",
      name:"Thrissur",
      dicription:"kerala festival",
      Image:"https://india.postsen.com/content/uploads/2023/04/29/7a02736cfc.jpg"
    },
    {
      id:"7",
      name:"Palakkad",
      dicription:"food macca",
      Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Palakkad_Tipu_Fort.jpg/640px-Palakkad_Tipu_Fort.jpg"
    },
    {
      id:"8",
      name:"Ernakulam",
      dicription:"city port",
      Image:"https://peopleplaces.in/wp-content/uploads/2023/02/Ernakulam-Discover-The-Urbane-Face-Of-Kochi-Kerala.jpg"
    },
    {
      id:"9",
      name:"kottayam",
      dicription:"Rubber arena",
      Image:"https://peopleplaces.in/wp-content/uploads/2023/01/Kottayam-Explore-The-Letter-Capital-Of-Kerala.jpg"
    },
    {
      id:"10",
      name:"Idukki",
      dicription:"kerala oxygen",
      Image:"https://static.theprint.in/wp-content/uploads/2018/08/2018_8img10_Aug_2018_PTI8_10_2018_000227B.jpg?compress=true&quality=80&w=376&dpr=2.6"
    },
    {
      id:"11",
      name:"Alappuzha",
      dicription:"Watersea",
      Image:"https://pyt-blogs.imgix.net/2020/07/abhishek-prasad-ii0oWs5abCo-unsplash-scaled.jpg?auto=format&ixlib=php-3.3.0"
    },
    {
      id:"12",
      name:"Pathamthitta",
      dicription:"Godship",
      Image:"https://cdn.educba.com/academy/wp-content/uploads/2023/01/Sabarimala-Temple.jpg"
    },
    {
      id:"13",
      name:"kollam",
      dicription:"Goosebumps",
      Image:"https://static.javatpoint.com/tourist-places/images/tourist-places-in-kollam1.png"
    },
    {
      id:"14",
      name:"Thiruvananthpuram",
      dicription:"Capital",
      Image:"https://gumlet.assettype.com/swarajya/2020-07/80fd68d5-1dd8-40bf-80f5-81f785e91dec/378119_padmanabhaswamy_temple.jpg"
    },
  ]
  
  return (
    <div>
      <Container>
      <Row>
      {  
       district.map((data)=>{
        return(
          <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={data.Image} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            {data.dicription}
          </Card.Text>
          <Button variant="primary">Click</Button>
        </Card.Body>
      </Card>
      </Col>
        )
    
      })
        
    }
    </Row>
    </Container>
  </div>
  );

}
export default App;