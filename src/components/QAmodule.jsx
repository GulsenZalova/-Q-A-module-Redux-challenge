import React, { useRef, useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Comment, Form, Header, Modal } from 'semantic-ui-react'
import { add, answered } from "../store/questionSlice"

function QAmodule() {
  const [open, setOpen] = useState(false)
  let dispatch = useDispatch();

  // console.log(dispatch(add))
  let questions = useSelector(state => state);
  const myQuestions = questions.questions.questions
  console.log(myQuestions)
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const handleChange = (e) => {
      setQuestion(e.target.value)
  }
  console.log(answer)
  const handleSubmit = (e) => {
    if (question.length != 0) {
      dispatch(add({ id: myQuestions.length, question: question, answers: [] }))
    }
  }

  const handleAnswered = (id) => {
    dispatch(answered([id, answer]))
    console.log(id)
  }
  return (
    <div>
      <Comment.Group className='container' threaded>
        <Header as='h3' dividing>
          
        </Header>
        {
          myQuestions.length > 0 && (
            myQuestions.map((item) => (
              <Comment key={item.id}>
                <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Comment.Content>
                  <Comment.Author as='a'>Elliot Fu</Comment.Author>
                  <Comment.Metadata>
                    <span>Yesterday at 12:30AM</span>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>{item.question}</p>
                  </Comment.Text>
                  <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button onClick={() => handleAnswered(item.id)}>Add Answer</Button>}
                  >
                    <Modal.Header>Answer</Modal.Header>
                    <Modal.Content image>
                      <Modal.Description>
                        <input type="text" className='answerBTN' placeholder='Write your answer' onChange={(e) => setAnswer(e.target.value)} />
                      </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button
                        content="Add Your Answer"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => setOpen(false)}
                        positive
                      />
                    </Modal.Actions>
                  </Modal>
                  <Comment.Actions>
                    <a>Reply</a>
                  </Comment.Actions>
                </Comment.Content>
                <Comment.Group>
                  {
                    item.answers &&(
                      item.answers.map((x, i) => (
                        <Comment key={i}>
                          <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                          <Comment.Content>
                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                            <Comment.Metadata>
                              <span>Just now</span>
                            </Comment.Metadata>
                            <Comment.Text>{x.answer}</Comment.Text>
                            <Comment.Actions>
                              <a>Reply</a>
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                      ))
                    )
                  }
                </Comment.Group>
              </Comment>
            ))
          )
        }


        <Form reply onSubmit={()=>handleSubmit()} >
          <Form.TextArea
            onChange={handleChange}
          />
          <Button
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            primary />
        </Form>
      </Comment.Group>
    </div>
  )
}

export default QAmodule
