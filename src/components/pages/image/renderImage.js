import React from 'react';

const RenderImage = (props) => (
    <div className="photo__content">
        {console.log(props)}
        <div className="photo__header">
            <div className="user">
                <div className="user__info">
                    <div className="user__avatar">
                        {/*не рендерить данные пока не пришел ответ от сервера react*/}
                        {/*<img src={props.image.user.profile_image.small} className="user__image" alt=""/>*/}
                    </div>
                    <div className="user__name"></div>
                </div>
            </div>
        </div>
    </div>
);

export default RenderImage;