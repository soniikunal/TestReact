import React from 'react'
import Category from '../Components/common/Category'
import AddQuestionModal from '../Components/common/AddQuestionModal'
import AddArticleModal from '../Components/common/AddArticleModal'

const ComponentParent = () => {
    return (<>
        <Category />
        <AddQuestionModal />
        <AddArticleModal/>
    </>
    )
}

export default ComponentParent