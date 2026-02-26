import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/layout/Layout";
import Navbar from "./components/common/Navbar";
import HomePage from "./features/home/HomePage";
import ArticlesPage from "./features/articles/ArticlesPage";
import ArticleDetailPage from "./features/articles/ArticleDetailPage";
import TeachingsPage from "./features/teachings/TeachingsPage";
import JournalsPage from "./features/readings/ReadingPage";
import ReadingPageDetail from "./features/readings/ReadingPageDetail";
import IELTSEssaysPage from "./features/ielts/IELTSEssaysPage";
import EssayDetailPage from "./features/ielts/IELTSEssayDetailPage";
import BooksPage from "./features/books/BooksPage";
import BookDetailPage from "./features/books/BookDetailPage";
import NotFound from "./features/NotFound";
import TeachingDetailPage from './features/teachings/TeachingDetailPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/articles" element={<ArticlesPage />} />
                <Route path="/article/:id" element={<ArticleDetailPage />} />
                <Route path="/teachings" element={<TeachingsPage />} />
                <Route path="/teachings/:id" element={<TeachingDetailPage />} />
                <Route path="/readings" element={<JournalsPage />} />
                <Route path="/readings/:id" element={<ReadingPageDetail />} />
                <Route path="/ielts-essays" element={<IELTSEssaysPage />} />
                <Route path="/ielts-essay/:task/:id" element={<EssayDetailPage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/books/:id" element={<BookDetailPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
