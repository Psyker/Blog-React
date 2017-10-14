import React from 'react';

export default class About extends React.Component {
    render() {
        return(
            <section className="section section-updates bg-primary text-light">
                <div className="container grid-lg">
                    <div className="columns">
                        <div className="column col-12 col-xs-12 text-center">
                            <h2>About me</h2>
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                                et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
                                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
                                optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}