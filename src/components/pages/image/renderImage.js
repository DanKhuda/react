import React from 'react';

const RenderImage = (props) => (
    <div className="photo__content">
        <div className="photo__header">
            <div className="user">
                <div className="user__info">
                    <div className="user__avatar">
                        {/*<img src={props.image.user.profile_image.small} className="user__image" alt=""/>*/}
                    </div>
                    <div className="user__name"></div>
                </div>
            </div>
        </div>
    </div>
);

export default RenderImage;