import React, { useEffect, useState } from 'react'
import Item from './Item'
import { useSelector } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import useActions from '../../hooks/useActions';
import { setFeatureByName } from '../../redux/features/todoSlice';

export default function List() {
  const { searchData, filteredTodo } = useSelector(state => state.todos)
  const [dragData, setDragData] = useState(searchData)
  const setFeature = useActions(setFeatureByName)

  useEffect(() => {
    if (searchData?.length) {
      setDragData(searchData)
      return
    }

    setDragData(filteredTodo)
  }, [searchData, filteredTodo])

  if (!searchData?.length) {
    return (
      <div className='flex_center my-4 py-4 txt-error'>
        <h2>Aranan eleman bulunamadı</h2>
      </div>
    )
  }

  const handleDragEnd = result => {
    const items = Array.from(dragData)
    const [item] = items?.splice(result.source.index, 1)
    items?.splice(result.destination.index, 0, item)

    setDragData(items)
    setFeature({ name: "data", value: items })
  }

  return (
    <div className="todos-list my-4">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, _) => (
            <div className='droppable' ref={provided.innerRef} {...provided.droppableProps}>
              {dragData?.map((item, index) => (
                <Draggable
                  key={item.subject}
                  draggableId={item.subject}
                  index={index}
                >
                  {(provided, _) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Item {...item} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
