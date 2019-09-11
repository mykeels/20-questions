fn main() {
    for i in 1..13 {
       for j in 1..13 {
           print!("{}  ", i * j);
           if i * j < 10 {
               print!(" ");   
           }
       }
       print!("\n")
    }
}
