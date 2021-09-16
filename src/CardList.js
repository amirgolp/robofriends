import Card from './Card';

const CardList = ({ robots }) => {
  
//   const cardComp = robots.map((robot, idx) => {
//     return <Card key={idx} id={robot.id} name={robot.name} email={robot.email}/>
//     });
  return (
    <div>
      { robots.map((robot, idx) => {
          return (<Card key={idx} id={robot.id} name={robot.name} email={robot.email} /> );
        })
      } 
  </div>
  );
}

export default CardList;