import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Topnav } from '../../components/Topnav';
import { Banner } from '../../components/Banner';

export const SongListPage = ({ pagetype = 'playlist' }) => {
  const { listid } = useParams();

  useEffect(() => {
    document.title = pagetype + listid;
  }, [])

  return (
    <>
      <Topnav />
      <div>
        <Banner bannertype={pagetype} />
        SongListPage {pagetype + listid}
      </div>
    </>
  )
}
