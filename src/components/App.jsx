import React, { Component } from 'react';
import { Container, Progress } from './style'


export default class App extends Component {
    state = {
        scrollPosition: 0,
    }
    componentDidMount() {
        this.listenToScrollEvent()
    }

    listenToScrollEvent = () => {
        document.addEventListener('scroll', () => {
            requestAnimationFrame(() => {
                // calculates the scroll distance
                this.calculateScrollDistance();
            })
        })
    }

    calculateScrollDistance = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = this.getDocHeight();

        const totalDocScrollLength = docHeight - windowHeight;
        const scrollPosition = Math.floor(scrollTop / totalDocScrollLength * 100)

        this.setState({
            scrollPosition,
        })
    }

    getDocHeight = () => {
        return Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        )
    }

    render(){
        return (
            <Container>
                <Progress scroll={`${this.state.scrollPosition}%`} />
                <header></header>
                <main>
                    <h1>Lorem Ipsum</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum enim mollis massa fringilla dictum. Duis tincidunt velit eget augue sagittis aliquet. Sed ut purus libero. Ut ullamcorper lacinia diam, scelerisque vulputate nisl molestie malesuada. Mauris eu elementum justo. Integer viverra eleifend urna id malesuada. Duis nisi enim, varius quis imperdiet non, efficitur sed mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <p>
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam faucibus, neque eu porta gravida, urna ante condimentum dolor, nec efficitur arcu velit ullamcorper risus. Morbi suscipit efficitur velit, nec maximus ipsum luctus nec. Aliquam erat volutpat. Vestibulum sagittis, mi sit amet pharetra ultrices, tortor ipsum luctus lacus, vel elementum erat erat non erat. Proin efficitur dui ante. Quisque tempus sodales urna nec fermentum. Aenean in urna ultricies, porttitor nisi in, tincidunt dolor. Vivamus porttitor, nulla vitae vestibulum auctor, nibh mi aliquam felis, in accumsan libero magna ut justo. Maecenas lacinia ultricies suscipit. Aenean est lectus, vestibulum eget ante pulvinar, posuere ornare est. Aenean quis tristique elit, eu condimentum turpis.
                    </p>
                    <p>
                        In hac habitasse platea dictumst. Nullam efficitur luctus venenatis. In vehicula augue nec pulvinar tempor. Suspendisse potenti. Vivamus a dolor fermentum nibh tincidunt lobortis ac a urna. Sed sapien tellus, eleifend eu ultrices sit amet, pellentesque quis libero. Curabitur interdum quam nec nisi mollis volutpat. Suspendisse potenti. Duis vel felis porta, accumsan nunc quis, elementum metus. Nunc vel dui et tortor tempor euismod.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum enim mollis massa fringilla dictum. Duis tincidunt velit eget augue sagittis aliquet. Sed ut purus libero. Ut ullamcorper lacinia diam, scelerisque vulputate nisl molestie malesuada. Mauris eu elementum justo. Integer viverra eleifend urna id malesuada. Duis nisi enim, varius quis imperdiet non, efficitur sed mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <p>
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam faucibus, neque eu porta gravida, urna ante condimentum dolor, nec efficitur arcu velit ullamcorper risus. Morbi suscipit efficitur velit, nec maximus ipsum luctus nec. Aliquam erat volutpat. Vestibulum sagittis, mi sit amet pharetra ultrices, tortor ipsum luctus lacus, vel elementum erat erat non erat. Proin efficitur dui ante. Quisque tempus sodales urna nec fermentum. Aenean in urna ultricies, porttitor nisi in, tincidunt dolor. Vivamus porttitor, nulla vitae vestibulum auctor, nibh mi aliquam felis, in accumsan libero magna ut justo. Maecenas lacinia ultricies suscipit. Aenean est lectus, vestibulum eget ante pulvinar, posuere ornare est. Aenean quis tristique elit, eu condimentum turpis.
                    </p>
                    <p>
                        In hac habitasse platea dictumst. Nullam efficitur luctus venenatis. In vehicula augue nec pulvinar tempor. Suspendisse potenti. Vivamus a dolor fermentum nibh tincidunt lobortis ac a urna. Sed sapien tellus, eleifend eu ultrices sit amet, pellentesque quis libero. Curabitur interdum quam nec nisi mollis volutpat. Suspendisse potenti. Duis vel felis porta, accumsan nunc quis, elementum metus. Nunc vel dui et tortor tempor euismod.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum enim mollis massa fringilla dictum. Duis tincidunt velit eget augue sagittis aliquet. Sed ut purus libero. Ut ullamcorper lacinia diam, scelerisque vulputate nisl molestie malesuada. Mauris eu elementum justo. Integer viverra eleifend urna id malesuada. Duis nisi enim, varius quis imperdiet non, efficitur sed mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <p>
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam faucibus, neque eu porta gravida, urna ante condimentum dolor, nec efficitur arcu velit ullamcorper risus. Morbi suscipit efficitur velit, nec maximus ipsum luctus nec. Aliquam erat volutpat. Vestibulum sagittis, mi sit amet pharetra ultrices, tortor ipsum luctus lacus, vel elementum erat erat non erat. Proin efficitur dui ante. Quisque tempus sodales urna nec fermentum. Aenean in urna ultricies, porttitor nisi in, tincidunt dolor. Vivamus porttitor, nulla vitae vestibulum auctor, nibh mi aliquam felis, in accumsan libero magna ut justo. Maecenas lacinia ultricies suscipit. Aenean est lectus, vestibulum eget ante pulvinar, posuere ornare est. Aenean quis tristique elit, eu condimentum turpis.
                    </p>
                    <p>
                        In hac habitasse platea dictumst. Nullam efficitur luctus venenatis. In vehicula augue nec pulvinar tempor. Suspendisse potenti. Vivamus a dolor fermentum nibh tincidunt lobortis ac a urna. Sed sapien tellus, eleifend eu ultrices sit amet, pellentesque quis libero. Curabitur interdum quam nec nisi mollis volutpat. Suspendisse potenti. Duis vel felis porta, accumsan nunc quis, elementum metus. Nunc vel dui et tortor tempor euismod.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum enim mollis massa fringilla dictum. Duis tincidunt velit eget augue sagittis aliquet. Sed ut purus libero. Ut ullamcorper lacinia diam, scelerisque vulputate nisl molestie malesuada. Mauris eu elementum justo. Integer viverra eleifend urna id malesuada. Duis nisi enim, varius quis imperdiet non, efficitur sed mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <p>
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam faucibus, neque eu porta gravida, urna ante condimentum dolor, nec efficitur arcu velit ullamcorper risus. Morbi suscipit efficitur velit, nec maximus ipsum luctus nec. Aliquam erat volutpat. Vestibulum sagittis, mi sit amet pharetra ultrices, tortor ipsum luctus lacus, vel elementum erat erat non erat. Proin efficitur dui ante. Quisque tempus sodales urna nec fermentum. Aenean in urna ultricies, porttitor nisi in, tincidunt dolor. Vivamus porttitor, nulla vitae vestibulum auctor, nibh mi aliquam felis, in accumsan libero magna ut justo. Maecenas lacinia ultricies suscipit. Aenean est lectus, vestibulum eget ante pulvinar, posuere ornare est. Aenean quis tristique elit, eu condimentum turpis.
                    </p>
                    <p>
                        In hac habitasse platea dictumst. Nullam efficitur luctus venenatis. In vehicula augue nec pulvinar tempor. Suspendisse potenti. Vivamus a dolor fermentum nibh tincidunt lobortis ac a urna. Sed sapien tellus, eleifend eu ultrices sit amet, pellentesque quis libero. Curabitur interdum quam nec nisi mollis volutpat. Suspendisse potenti. Duis vel felis porta, accumsan nunc quis, elementum metus. Nunc vel dui et tortor tempor euismod.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum enim mollis massa fringilla dictum. Duis tincidunt velit eget augue sagittis aliquet. Sed ut purus libero. Ut ullamcorper lacinia diam, scelerisque vulputate nisl molestie malesuada. Mauris eu elementum justo. Integer viverra eleifend urna id malesuada. Duis nisi enim, varius quis imperdiet non, efficitur sed mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <p>
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam faucibus, neque eu porta gravida, urna ante condimentum dolor, nec efficitur arcu velit ullamcorper risus. Morbi suscipit efficitur velit, nec maximus ipsum luctus nec. Aliquam erat volutpat. Vestibulum sagittis, mi sit amet pharetra ultrices, tortor ipsum luctus lacus, vel elementum erat erat non erat. Proin efficitur dui ante. Quisque tempus sodales urna nec fermentum. Aenean in urna ultricies, porttitor nisi in, tincidunt dolor. Vivamus porttitor, nulla vitae vestibulum auctor, nibh mi aliquam felis, in accumsan libero magna ut justo. Maecenas lacinia ultricies suscipit. Aenean est lectus, vestibulum eget ante pulvinar, posuere ornare est. Aenean quis tristique elit, eu condimentum turpis.
                    </p>
                    <p>
                        In hac habitasse platea dictumst. Nullam efficitur luctus venenatis. In vehicula augue nec pulvinar tempor. Suspendisse potenti. Vivamus a dolor fermentum nibh tincidunt lobortis ac a urna. Sed sapien tellus, eleifend eu ultrices sit amet, pellentesque quis libero. Curabitur interdum quam nec nisi mollis volutpat. Suspendisse potenti. Duis vel felis porta, accumsan nunc quis, elementum metus. Nunc vel dui et tortor tempor euismod.
                    </p>
                </main>
            </Container>
        )
    }
}