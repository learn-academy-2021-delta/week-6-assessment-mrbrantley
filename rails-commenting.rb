# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# A controller was generated in the ruby command console, $rails g controller BlogPost. This essentially inherits the default class of ApplicationController, and creates the BlogPostController.rb file in our app/contoller folder
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # The instance variable @posts holds the active record query of BlogPost.all. BlogPost.all should return an array of all of the instances in the database.
    @posts = BlogPost.all
  end

  def show
    # ---3)
    #The singular instance variable of @post means we want to show only one item. Pass it an active record query to find one particular blog post. Rather than hard-coding an id for each post, we get our id from params.
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # new is a restful route that displays a form for the user. It enables users to add information to our web application that is stored in the database. Create an instance variable @post, that holds and active record command, Post.new. It expects information to follow, we need a place to hold all of the content from the form and hold it and then be able to pass the information around, and ultimately to the database. 
  def new
    @post = Post.new
  end

  def create
    # ---5)
    # The singular instance variable of @post means we want to show only one item. Pass it an active record query BlogPost.create. Passing it a method call, called blog_post_params, which will be later defined in the controller on line 70. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6)
  # Like new, edit is a restful route that creates a form that a user can see to eventually update or modify information
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Using active record update, takes blog_post_params to update specific columns. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # If the blog_post_path was not successfully destroyed, redirect to stay on the show page, blog_post_path(@post)
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # Keyword, that makes it so anything below the private line cannot be accessed outside of the scope of this class. This protects our data. 
  private
  def blog_post_params
    # ---10)
    # If the user is posting information, they have to post only to the blog_post table and they are permitted only the columns title and content. This is a strong param method that allows only specific columns of a specific table to be interacted with by the user.
    params.require(:blog_post).permit(:title, :content)
  end
end
