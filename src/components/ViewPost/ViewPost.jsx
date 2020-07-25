import React, { useState, Fragment } from 'react'
import classes from './ViewPost.module.css'
import MidsomerImage from '../../assets/images/c4.png'
import SocialIcons from '../SocialIcons/SocialIcons'

import { Container, Row, Col } from 'reactstrap';
import LatestPosts from '../LatestPosts/LatestPosts';


function ViewPost() {
    const [post, setPost] = useState({
        id: 1, feature: '#Travel', author: 'Fareem', title: 'It’s “Midsommar”. Visit these places to experience the best of Sweden’s summer', text: "Midsummer (Midsommar) is probably one of the most important holidays in the Swedish calendar. The holiday originates from agrarian times, where celebrations were held to welcome summer time and the season of fertility. Celebrations typically include large gatherings of family, lunches including pickled herring, boiled potatoes with fresh dill, a grilled dish of some kind, such as spare rib or salmon, and dessert includes the first strawberries of summer. This is followed by dancing and singing.\nInfact, many Swedes even begin their five-week annual holidays to coincide with this time. So, if you take a cue to visit the county this summer, especially during midsummer, here’s a few spots you may want to go to, to experience the best of what Sweden offers in these months."
    })
    const [relatedPosts, setLatestsPosts] = useState([
        {
            imgUrl: "./images/4.png",
            content: "5 ways you can help reduce over-tourism",
            date: "Aug 25, 2019",
            tag: "#Travel",
        },
        {
            imgUrl: "./images/4.png",
            content: "5 ways you can help reduce over-tourism",
            date: "Aug 25, 2019",
            tag: "#Travel",
        },
        {
            imgUrl: "./images/4.png",
            content: "5 ways you can help reduce over-tourism",
            date: "Aug 25, 2019",
            tag: "#Travel",
        },
        {
            imgUrl: "./images/4.png",
            content: "5 ways you can help reduce over-tourism",
            date: "Aug 25, 2019",
            tag: "#Travel",
        },
    ]);
    return (
        <Fragment>
            <Container style={{ maxWidth: '100vw', background: '#F5F5F5', position: 'relative', padding: '2rem' }} fluid>

                <Row>
                    <Col>
                        <div className={classes.PostImage1}>
                            <img src={MidsomerImage} alt="midsomer image" />
                            <div className={classes.Hash}>#</div>
                        </div>
                        <SocialIcons facebook={'#3C5A99'} twitter={'#33CCFF'} instagram={"transparent linear-gradient(50deg, #FBE18A 0%, #FCBB45 21%, #F75274 38%, #D53692 52%, #8F39CE 74%, #5B4FE9 100%) 0% 0% no-repeat padding-box"}
                        />
                    </Col>
                    <Col>
                        <div className={classes.PostTextWrapper1}>
                            <h4 className={classes.PostTitle}>{post.title}</h4>
                            <div className={classes.PostSubTitle}>
                                <p className={classes.PostFeature}>{post.feature}</p>
                                <p className={classes.PostAuthor}>By {post.author}</p>
                            </div>
                            <div>
                                {post.text.split('\n').map((item, i) => <p className={classes.PostText} key={i}>{item}</p>)}
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginTop: '3rem' }}>
                    <Col>       {post.text.split('\n').map((item, i) => <p className={classes.PostText2} key={i}>{item}</p>)}</Col>
                    <Col>
                        <div className={classes.PostImage2}>
                            <img src={MidsomerImage} alt="midsomer2"></img>
                        </div>

                    </Col>
                </Row>
                <Row style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                    <Col>
                        <div className={classes.PostImage3}>
                            <img src={MidsomerImage} alt="midsomer3" />
                        </div>
                    </Col>
                    <Col>
                        {post.text.split('\n').map((item, i) => <p className={classes.PostText3} key={i}>{item}</p>)}
                    </Col>
                </Row>
            </Container>

            {/* <Row>
                    <Col> */}
            <div className={classes.RelatedPostsWrapper}>
                <div className={classes.RelatedPosts}>
                    <h3 className={classes.RPTitle}>Related Articles</h3>
                    <LatestPosts className={classes.LatestPostsList} posts={relatedPosts} removeButton={true} />
                </div>
            </div>
            {/* </Col>
                </Row> */}



        </Fragment>
    )
}

export default ViewPost
