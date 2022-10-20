import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import useActions from '../../hooks/useActions'
import { editTodoByName, removeTodoByName, changeCheckStatus } from '../../redux/features/todoSlice'
import { OrangeButton, RedButton } from '../Button'
import f1rf1r from 'f1rf1r'

export default function Item({ subject, isCompleted, endDate, id }) {
  const dateComparison = date => new Date() > new Date(date)
  const [remove, edit, setCheck] = useActions([removeTodoByName, editTodoByName, changeCheckStatus])
  const modal = new f1rf1r.Modal()
  const notif = new f1rf1r.Notification()
  const dateConvert = () => new Date(endDate).toLocaleDateString().split(".").reverse().join("-")

  const removeTodo = () => {
    modal.modal({
      msg: `${subject} todosunu silmek istediğinize emin misiniz?`,
      buttons: {
        success: {
          text: "Sil",
          func: () => {
            remove(id)
            notif.success("Todo başarıyla silindi")
          }
        },
        error: {
          text: "İptal Et"
        }
      }
    })
  }

  const editTodo = () => {
    modal.formModal({
      inputs: [
        {
          label: "Konu Giriniz",
          placeholder: "Konu Giriniz",
          name: "subject",
          value: subject,
        },
        {
          label: "Tarih Giriniz",
          placeholder: "Tarih Giriniz",
          name: "endDate",
          value: dateConvert(),
          type: "date"
        },
      ],
      buttons: {
        success: {
          text: "Düzenle",
          func: () => {
            edit({ id, data: modal.data })
            notif.success("Todo başarıyla güncellendi")
          }
        },
        error: {
          text: "İptal Et"
        }
      }
    })
  }

  return (
    <article className={`todos-list-item d_flex ai_center jc_space-between p-4 mb-4 ${isCompleted && "completed"}`}>
      <div className="todos-list-item-left">
        <div className={`end-date mb-4 ${dateComparison(endDate) ? "txt-error" : "txt-success"}`}>{new Date(endDate).toLocaleDateString()}</div>
        <label className='d_flex ai_center todos-list-item-label' htmlFor={`check-todo-${subject}`} >
          <input
            type="checkbox"
            name={`check-todo-${subject}`}
            id={`check-todo-${subject}`}
            className="d_none"
            checked={isCompleted}
            onChange={() => setCheck({ subject, isCompleted: !isCompleted })}
          />
          <div className="todos-list-item-label-check mr-4 flex_center" id='check'>
            <AiOutlineCheck />
          </div>
          <p>{subject}</p>
        </label>
      </div>

      <div className='d_flex'>
        <RedButton text="Sil" className="mr-4" onClick={removeTodo} />
        <OrangeButton text="Düzenle" onClick={editTodo} />
      </div>
    </article>
  );
}
