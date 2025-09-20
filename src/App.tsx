import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import TeachingsPage from "./pages/TeachingsPage";
import JournalsPage from "./pages/ReadingPage";
import ReadingPageDetail from "./pages/ReadingPageDetail";
import IELTSEssaysPage from "./pages/IELTSEssaysPage";
import EssayDetailPage from "./pages/IELTSEssayDetailPage";
import BooksPage from "./pages/books/BooksPage";
import BookDetailPage from "./pages/books/BookDetailPage";
import NotFound from "./pages/NotFound";
import TeachingDetailPage from './pages/TeachingDetailPage';

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
