export default function AdventureInfoCharacters () {





    return(
        <Container>
            <Row>
                <Col>
                <Link to={"/adventure/addCharacter"}><Button variant="primary" size="lg">
          Add character
        </Button></Link>
                </Col>
                <Col>
                <Link to={"/CreateNewAdventure"}><Button variant="primary" size="lg">
          Monster
        </Button></Link>
                </Col>
            </Row>
        </Container>
    )
}