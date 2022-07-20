import React from 'react'
import { Link} from 'react-router-dom';
export default function Home() {
    return (
        <div className='container-fluid m-0 p-0'>
            <div className="row m-0 p-0 shadow-lg">
                <div className="jumbotron w-100">
                    <div className="container">
                        <h1 className="display-3">Hello, Build your resume free!</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ullam, sunt nam iusto voluptate sit placeat libero reiciendis dolore necessitatibus dolorum deserunt voluptates doloribus amet. Laboriosam autem enim quisquam quos neque cum? Voluptatibus dolor fuga velit quasi nihil, delectus saepe officiis ducimus itaque, at porro quae recusandae fugit perferendis suscipit enim? Repellendus commodi id obcaecati! Tempora, nemo dignissimos. Sit et expedita, autem tenetur doloremque in amet? Aperiam voluptas fugiat, quis eius, excepturi doloremque ratione autem debitis, maiores ipsum incidunt dolorum laudantium alias hic saepe harum animi ducimus recusandae non dolor. Laudantium, voluptatum ducimus reiciendis quasi quae porro hic temporibus velit ut est, quaerat distinctio quo. Molestias dolor quaerat similique voluptatum ipsam blanditiis at ipsum sit. Ullam autem voluptatibus pariatur! Magni sequi ullam architecto, voluptatum repellendus nostrum et aliquid ipsum assumenda, minima aut magnam eos officia voluptas nam libero deleniti impedit quaerat quia asperiores ex. Totam nemo excepturi sint eum distinctio!</p>
                        <p><Link to="/Forms" className="btn btn-primary btn-lg" role="button">Build now &raquo;</Link></p>
                    </div>
                </div>
            </div>
            <div className="row m-0 p-0 mt-1">
                <h2 className='text-center bg-light m-0 p-3 mb-1 mt-1 shadow-lg'>Why to choose us!</h2>
                <div className="col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-header">Reason 1</div>
                        <div className="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nostrum neque saepe numquam quam sit asperiores laborum maiores commodi dicta, repudiandae sed mollitia eligendi nisi, possimus perferendis totam ipsa in necessitatibus, corporis recusandae illum incidunt nesciunt adipisci! Ad laboriosam voluptates beatae fugiat maxime libero tempore perferendis pariatur reprehenderit atque inventore at illo facilis sit, nemo adipisci magni aliquam nesciunt. Maxime quam, labore consequatur nihil molestiae optio exercitationem incidunt minima voluptate laudantium blanditiis voluptas necessitatibus laboriosam. Itaque, omnis maiores aut aliquid quos ex quam veniam unde dignissimos ut velit repellendus! Possimus maxime quas et aspernatur officiis fugit molestias, illum ducimus numquam!</div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-header">Reason 1</div>
                        <div className="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nostrum neque saepe numquam quam sit asperiores laborum maiores commodi dicta, repudiandae sed mollitia eligendi nisi, possimus perferendis totam ipsa in necessitatibus, corporis recusandae illum incidunt nesciunt adipisci! Ad laboriosam voluptates beatae fugiat maxime libero tempore perferendis pariatur reprehenderit atque inventore at illo facilis sit, nemo adipisci magni aliquam nesciunt. Maxime quam, labore consequatur nihil molestiae optio exercitationem incidunt minima voluptate laudantium blanditiis voluptas necessitatibus laboriosam. Itaque, omnis maiores aut aliquid quos ex quam veniam unde dignissimos ut velit repellendus! Possimus maxime quas et aspernatur officiis fugit molestias, illum ducimus numquam!</div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card shadow-sm">
                        <div className="card-header">Reason 1</div>
                        <div className="card-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi nostrum neque saepe numquam quam sit asperiores laborum maiores commodi dicta, repudiandae sed mollitia eligendi nisi, possimus perferendis totam ipsa in necessitatibus, corporis recusandae illum incidunt nesciunt adipisci! Ad laboriosam voluptates beatae fugiat maxime libero tempore perferendis pariatur reprehenderit atque inventore at illo facilis sit, nemo adipisci magni aliquam nesciunt. Maxime quam, labore consequatur nihil molestiae optio exercitationem incidunt minima voluptate laudantium blanditiis voluptas necessitatibus laboriosam. Itaque, omnis maiores aut aliquid quos ex quam veniam unde dignissimos ut velit repellendus! Possimus maxime quas et aspernatur officiis fugit molestias, illum ducimus numquam!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
