float rad, r, dr, d;
color c;
void setup() {
  size( 800, 800 );
  background( 0 );
  rad = r = 0.0;
  dr = 5.0; // you can change value
  d = 200;
  c = color( random( 0, 255 ), random( 0, 255 ), random( 0, 255 ) );
}
void draw() {
  noStroke();
  // fill( random( 0, 255 ), random( 0, 255 ), random( 0, 255 ) );
  fill( c );
  ellipse( r * cos( rad ) + width / 2, r * sin( rad ) + height / 2, 10, 10 );
  r += dr;
  rad += PI / 300; // 300 <- you can change value
  if( r < 0 || r > d ) dr = -dr; // 300 <- you can change value
  if( frameCount % 1000 == 0 ) c = color( random( 0, 255 ), random( 0, 255 ), random( 0, 255 ) );
}
