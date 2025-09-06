import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/Layout";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import IELTSEssaysPage from "./pages/IELTSEssaysPage";
import IELTSEssayDetailPage from "./pages/IELTSEssayDetailPage";
import BooksPage from "./pages/books/BooksPage";
import BookDetailPage from "./pages/books/BookDetailPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/books/CourseDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
              <Route path="/ielts-essays" element={<IELTSEssaysPage />} />
              <Route path="/ielts-essay/:id" element={<IELTSEssayDetailPage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/book/:id" element={<BookDetailPage />} />
              <Route path="/books/courses" element={<CoursesPage />} /> {/* Added Courses route */}
              <Route path="/books/courses/:id" element={<CourseDetailPage />} /> {/* Added dynamic course detail route */}
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
