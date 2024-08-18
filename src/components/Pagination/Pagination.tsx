import { useEffect, useState } from 'react'
import { PaginationProps } from 'types/types'

import { PaginationItem, PaginationStyled } from './Pagination.styled'

export default function Pagination({ total, currentPage, onPageChange }: PaginationProps) {
  const pageSize = 5
  const pagesToShow = 4
  const totalPages = Math.ceil(total / pageSize)

  const [currentGroup, setCurrentGroup] = useState(Math.ceil(currentPage / pagesToShow))

  useEffect(() => {
    setCurrentGroup(Math.ceil(currentPage / pagesToShow))
  }, [currentPage])

  const maxGroups = Math.ceil(totalPages / pagesToShow)
  const startPage = (currentGroup - 1) * pagesToShow + 1
  const endPage = Math.min(startPage + pagesToShow - 1, totalPages)

  const handlePageClick = (page: number) => {
    onPageChange(page)
  }

  const handleNextGroup = () => {
    if (currentGroup < maxGroups) {
      if (currentPage - 1 < currentGroup * 4) setCurrentGroup(currentGroup + 1)
      onPageChange(currentPage + 1)
    }
  }

  const handlePrevGroup = () => {
    if (currentGroup > 1) {
      if (currentPage + 1 > currentGroup * 4) setCurrentGroup(currentGroup - 1)
      onPageChange(currentPage - 1)
    }
  }

  return (
    <PaginationStyled>
      <PaginationItem
        className={currentGroup === 1 ? 'pagination__item--disabled' : ''}
        onClick={handlePrevGroup}
      >
        <a href='#'>{'<'}</a>
      </PaginationItem>

      {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((number) => (
        <PaginationItem
          key={number}
          className={number === currentPage ? 'active' : ''}
          onClick={() => handlePageClick(number)}
        >
          <a href='#'>{number}</a>
        </PaginationItem>
      ))}

      <PaginationItem
        className={currentGroup === maxGroups ? 'disabled' : ''}
        onClick={handleNextGroup}
      >
        <a href='#'>{'>'}</a>
      </PaginationItem>
    </PaginationStyled>
  )
}
