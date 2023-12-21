import { useFilmList } from "@/lib/hooks/useFilmList";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useState, useEffect } from "react";
import Pagination from "../../common/Pagination/Pagination";
import Film from "./Film/Film";
import Loader from "@/components/common/Loader";
import * as Style from "./index.styled";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Films = () => {
  const router = useRouter();
  // Начинаем с первой страницы фильмов
  const [page, setPage] = useState("1");
  // Кол-во фильмов на странице

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query);
      setPage(router.query.current_page || "");
    }
  }, [router.isReady]);

  const [pageSize, setPageSize] = useState(10);
  const { filmList, isLoading } = useFilmList(String(page), String(pageSize));
  const [loading, setLoading] = useState(false);
  const size = useWindowSize();
  const windowWidth = size[0];
  const windowHeight = size[1];
  


  let prevVal = page;

  const filmsList = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

  if (isLoading) return <div style = {{position: 'absolute', left: '50%', top: '50%'}}><Loader /></div> 

  const handlePageChange = async (page: number) => {
    setLoading(true);
    setTimeout(() => {
      setPage(page);
      setLoading(false);
    }, 500);
  };


  return filmList ? (
    <Style.Films>
      <Style.Content>
        <Style.Title>Films</Style.Title>
          <Style.List>{filmsList}</Style.List>
           
      </Style.Content>
      <Pagination
            totalUsersCount={filmList?.data?.movie_count}
            currentPage={page}
            pageSize={pageSize}
            onPageChange={(page) => {
              setPage(page);
              router.push(`/catalog/${page}`);
            }}
          />
    </Style.Films>
  ) : null;
  
};

export default Films;
