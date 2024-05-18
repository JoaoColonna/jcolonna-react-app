const today = new Date();

function formatDate(date){
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long'},
  ).format(date);
}

const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: '',
    color: 'pink'
  }
}
export function TodoList(){
  const name = "Hedy Lamar";
  return(
    <div style={person.theme}>
      <h1>{person.name}'s To Do List for {formatDate(today)}</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamar"
        className="photo"
      />
      <ul style={{
        backgroundColor: 'black',
        color: 'pink'
      }}>
        <li>Improve something</li>
        <li>Run away</li>
        <li>Take some air outside</li>
      </ul>
    </div>
  );
}

export function Profile(){
  return (
    <>
      <img  
        src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/025.png"
        alt="Pikachu"
      />
    </>
  )
}

export function Avatar({ person, size }){
  const avatar = "https://i.imgur.com/7blqAe2.gif";
  const alt = "Korra";
  return (
    <img 
      className="avatar"
      src={avatar}
      alt={alt}
      width={100}
      height={100}
    />
  );
}

function Gallery(){
  return (
    <>
      <section>
        <div>Pokemon</div>
        <Profile />
        <Profile />
        <TodoList />
        <Avatar 
          person={{name: "Korra", imageId: '7blqAe2'}}
          size={100}
        />
      </section>
    </>
  );
}



export default Gallery;