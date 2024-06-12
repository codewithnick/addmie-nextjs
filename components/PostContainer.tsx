import { Card, CardContent, Container, Grid } from "@mui/material";

export default function PostContainer(){
    return (
        <Container className="content-container">
        <Grid container spacing={3}>
          {[...Array(10)].map((_, index) => (
            <Grid key={index} item xs={12}>
              <Card className="card">
                <CardContent>
                  {/* Content of your post */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
}